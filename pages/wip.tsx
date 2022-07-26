import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import TodoContext from 'components/TodoContext'

const Wip: NextPage = () => {
  const context = useContext(TodoContext)

  const handleDone = context.updateTodoStatusByIndex('Done')

  return (
    <Layout title={'WIP'}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {context.todos.map((todo, index) =>
          todo.status === 'WIP' ? (
            <Grid item xs={6} md={4} key={todo.uuid}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {todo.name}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: 'end',
                    alignItems: 'center',
                  }}
                >
                  <Button onClick={() => handleDone(index)}>DONE</Button>
                </CardActions>
              </Card>
            </Grid>
          ) : null
        )}
      </Grid>
    </Layout>
  )
}

export default Wip
