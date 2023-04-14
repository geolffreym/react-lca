import { FC, ReactNode } from 'react';
import { Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system';

type Props = {
  tree?: ReactNode
  form?: ReactNode
};

const Header = styled('header')({
  width: '100%',
  height: '2rem',
})

/**
 * Presentational component
 * Are concerned with how things looks.
 * 
 * ref: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 * ref: https://medium.com/@learnreact/container-components-c0e67432e005
 * @param props 
 * @returns 
 */
const View: FC<Props> = (props: Props): JSX.Element => {
  // Bad idea use nested components to handle props.
  const { tree, form } = props

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={12}>
          <Header>
            <Typography variant="h5" component="h5">
              Find the LCA of a Binary Tree
            </Typography>
          </Header>
        </Grid>
        <Grid item xs={12} md={3}>
          {form}
        </Grid>
        <Grid item xs={12} md={8}>
          {tree}
        </Grid>
      </Grid>
    </Container>
  )
};



export default View;
