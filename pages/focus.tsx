import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import Todo from 'data/Todo'
import { useRouter } from 'next/router'
import { useTodos, useTodosDispatch } from 'components/TodosContext'

const FocusTodoPage: NextPage = () => {
  const todos = useTodos()
  const todoDispatch = useTodosDispatch()
  const router = useRouter()

  const [focusTodo, setFocusTodo] = useState<Todo>()

  const validFocusTodo = () => {
    if (!focusTodo) throw new Error('')
    return focusTodo
  }

  const handleDone = () => {
    todoDispatch({ type: 'status', target: validFocusTodo(), to: 'Done' })
    router.push('/wip')
  }

  const handleUnFocus = () => {
    todoDispatch({ type: 'unfocus', target: validFocusTodo() })
    router.push('/wip')
  }

  useEffect(() => {
    const todo = todos.find(todo => todo.isFocused)
    setFocusTodo(todo)
  }, [todos])

  return focusTodo ? (
    <PageLayout>
          }}
        >
          <Button onClick={() => handleUnFocus()}>UNFOCUS</Button>
          <Button onClick={() => handleDone()}>DONE</Button>
        </CardActions>
      </Card>
    </PageLayout>
  ) : null
}

export default FocusTodoPage
