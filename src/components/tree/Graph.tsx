import { FC, Profiler, memo } from 'react'
import { Box } from '@mui/material'
import Node from '../../models/Node'

type GraphProps = {
    tree: Node | null
    match: number
}


const Graph: FC<GraphProps> = memo(({ tree, match }): JSX.Element => {
    const RecursiveTree = (tree: Node | null) => {
        if (tree == null) return <></>
        return (
            <Box display="flex" flexDirection={"column"}>
                <Box display="flex" key={tree?.value} justifyContent="center"                    >
                    <Box sx={{
                        padding: "15px",
                        backgroundColor: "#eee",
                        borderRadius: "60%",
                        margin: "2rem",
                        ...match === tree.value && {
                            backgroundColor: "green",
                            color: "#fff"
                        }
                    }}>
                        {tree?.value}
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Box display="flex" key={tree?.left?.value}>
                        {RecursiveTree(tree?.left)}
                    </Box>
                    <Box display="flex" key={tree?.right?.value}>
                        {RecursiveTree(tree?.right)}
                    </Box>
                </Box >
            </Box>
        )
    }

    return (
        <Profiler id="graph" onRender={(e) => console.log(e)}>
            <Box>{RecursiveTree(tree)}</Box>
        </Profiler>
    )
})

export default Graph