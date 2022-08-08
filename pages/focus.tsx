import { useContext, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import TodoContext from 'components/TodoContext'
import Todo from 'data/Todo'
import { useRouter } from 'next/router'

const FocusTodoPage: NextPage = () => {
  const context = useContext(TodoContext)
  const router = useRouter()

  const [focusTodo, setFocusTodo] = useState<Todo>()

  const handleDone = () => {
    if (!focusTodo) throw new Error('')

    context.updateTodoStatus(focusTodo, 'Done')

    router.push('/wip')
  }

  useEffect(() => {
    const todo = context.todos.find(todo => todo.isFocused)

    if (!todo) throw new Error('')

    setFocusTodo(todo)
  }, [context.todos, focusTodo])

  return focusTodo ? (
    <Layout title={'Focus'}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {focusTodo.name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => handleDone()}>DONE</Button>
        </CardActions>
      </Card>
    </Layout>
  ) : null
}

export default FocusTodoPage
