import { useState } from 'react'
import type { NextPage } from 'next'
import ListPageLayout from 'components/layouts/ListPageLayout'
import { TodoList } from 'components/TodoList'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'
import { useRouter } from 'next/router'
import { ModifyTodoDialog } from 'components/ModifyTodoDialog'
import { useTodos, useTodosDispatch } from 'components/TodosContext'
import { ModifyTodoInputs } from 'data/TodosService'

const Home: NextPage = () => {
  const todos = useTodos()
  const todoDispatch = useTodosDispatch()

  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [editTodo, setEditTodo] = useState<Todo>()

  const handleAdd = (newTodoName: string) => {
    todoDispatch({
      type: 'add',
      payload: { name: newTodoName, term: 'Short', priority: null },
    })
  }

  const handleWip = (todo: Todo, index: number) => {
    todoDispatch({
      type: 'status',
      target: todo,
      to: 'WIP',
    })
    router.push('/wip')
  }

  const handleModify = (todo: Todo, index: number) => {
    setOpen(true)
    setEditTodo(todo)
  }

  const handleFocus = (todo: Todo) => {
    todoDispatch({ type: 'focus', target: todo })
    router.push('/focus')
    console.log('focus on ...', todo)
  }

  const handleDelete = (todo: Todo, index: number) => {
    todoDispatch({ type: 'delete', target: todo })
  }

  const handleInputModifyTodoDialog = (input: ModifyTodoInputs) => {
    if (!editTodo) return
    setOpen(false)
    todoDispatch({ type: 'modify', target: editTodo, payload: input })
  }

  const handleCloseModifyTodoDialog = () => {
    setOpen(false)
  }

  return (
    <ListPageLayout>
      <AddTodoField onAdd={handleAdd}></AddTodoField>

      <TodoList
        todos={todos}
        onWip={handleWip}
        onFocus={handleFocus}
        onModify={handleModify}
        onDelete={handleDelete}
      ></TodoList>

      <ModifyTodoDialog
        editTodo={editTodo}
        open={open}
        onInput={handleInputModifyTodoDialog}
        onClose={handleCloseModifyTodoDialog}
      ></ModifyTodoDialog>
    </ListPageLayout>
  )
}

export default Home
