// REACT IMPORTS
import { FC, FormEvent, ChangeEvent, useMemo, useCallback, useState } from 'react';
import Node, { deserializeBT, LCA } from '../../models/Node'
import View from './View';
import Form from './Form'
import Graph from './Graph';

/**
 * Container components
 * Are concerned with how things work.
 * 
 * ref: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 * ref: https://medium.com/@learnreact/container-components-c0e67432e005
 * @returns 
 */
export const Container: FC = (): JSX.Element => {
    let debounce: NodeJS.Timeout
    const [rawTree, setRawTree] = useState("")
    const [match, setMatch] = useState(-1)

    // Avoid overhead on tree generation
    const tree: Node | null = useMemo(() => {
        try {
            // try to deserialize string array representation
            const jsArray: [] = JSON.parse(rawTree)
            return deserializeBT(jsArray)
        } catch (e) {
            // this exception will be raised when an invalid array is passed
            return null
        }
    }, [rawTree])

    // On new raw node added to tree
    const onTreeInput = (e: ChangeEvent<HTMLInputElement>): void => {
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            setRawTree(e.target.value)
        }, 500)
    }

    // On ready to find LCA
    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const nodeA = parseInt(e.currentTarget.A.value)
        const nodeB = parseInt(e.currentTarget.B.value)

        const lca = LCA(tree, nodeA, nodeB)
        setMatch(lca?.value ?? -1)
    }

    // Component composition with pre set events
    // avoid prop drilling anti-pattern
    return <View
        form={<Form {...{ onSubmit, onTreeInput }} />}
        tree={<Graph {...{ tree, match }} />}
    />;
}
