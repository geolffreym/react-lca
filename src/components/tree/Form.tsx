import { FC, FormEvent, ChangeEvent } from 'react';
import { Box, TextField, Button } from '@mui/material'

type InputsProps = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onTreeInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Form: FC<InputsProps> = (props): JSX.Element => {
    // Destructing props
    const { onSubmit, onTreeInput } = props

    return (
        <Box component="form" onSubmit={onSubmit} >
            <Box>
                <TextField
                    fullWidth
                    onChange={onTreeInput}
                    variant="outlined"
                    helperText="Write the nodes in linear array struct. eg: [1,2,3,4,5]"
                    label="Enter tree linear struct"
                />
            </Box>
            <Box mt={5} display="flex" justifyContent="space-evenly">
                <Box display="flex" mr={2} flexGrow={1}>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Node A"
                        name="A"
                        helperText="Write first node to match LCA"
                    />
                </Box>
                <Box display="flex" flexGrow={1}>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Node B"
                        name="B"
                        helperText="Write second node to match LCA"
                    />
                </Box>
            </Box>
            <Box mt={3}>
                <Button variant="contained" type="submit">Find</Button>
            </Box>
        </Box>
    )
}

export default Form

