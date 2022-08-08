import { useContext } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import TodoContext from 'components/TodoContext'
import TodoService from 'data/TodoService'
import { useRouter } from 'next/router'
import Todo from 'data/Todo'

const WipTodoPage: NextPage = () => {
  const context = useContext(TodoContext)
  const router = useRouter()

  const handleFocus = (todo: Todo) => {
    const todos = TodoService.focusOn(context.todos, todo)
    context.setTodos(todos)
    router.push('/focus')
    console.log('focus on ...', todo)
  }

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
                  <Button
                    onClick={() => handleFocus(todo)}
                    disabled={todo.canFocus()}
                  >
                    Focus
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ) : null
        )}
      </Grid>
    </Layout>
  )
}

export default WipTodoPage
