import type { NextPage } from 'next'
import ListPageLayout from 'components/layouts/ListPageLayout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import Todo from 'data/Todo'
import { useTodos, useTodosDispatch } from 'components/TodosContext'

const WipTodoPage: NextPage = () => {
  const todos = useTodos()
  const todoDispatch = useTodosDispatch()
  const router = useRouter()

  const handleFocus = (todo: Todo) => {
    todoDispatch({ type: 'focus', target: todo })
    router.push('/focus')
    console.log('focus on ...', todo)
  }

  return (
    <ListPageLayout>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {todos.map((todo, index) =>
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
                    disabled={!todo.canFocus(todos)}
                  >
                    Focus
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ) : null
        )}
      </Grid>
    </ListPageLayout>
  )
}

export default WipTodoPage
