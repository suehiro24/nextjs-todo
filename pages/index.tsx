import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList } from 'components/TodoList'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'
import TodoContext from 'components/TodoContext'
import { useRouter } from 'next/router'
import { ModifyTodoDialog } from 'components/ModifyTodoDialog'

const Home: NextPage = () => {
  const context = useContext(TodoContext)
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [editTodo, setEditTodo] = useState<Todo>()

  const handleAdd = (newTodoName: string) => {
    context.setTodos([
      ...context.todos,
      Todo.create(newTodoName, 'Short', null),
    ])
  }

  const handleWip = (index: number) => {
    context.updateTodoStatusByIndex('WIP')(index)
    router.push('/wip')
  }

  const handleModify = (index: number) => {
    setOpen(true)
    setEditTodo(context.todos[index])
    console.log('start modifying todo', index)
  }

  const handleDelete = (index: number) => {
    const newTodos = context.todos.slice()
    newTodos.splice(index, 1)
    context.setTodos(newTodos)
  }

  const handleInputModifyTodoDialog = (newTodo: Todo) => {
    setOpen(false)

    const newTodos = context.todos.slice()
    const index = newTodos.findIndex((todo: Todo) => {
      return todo.uuid === newTodo.uuid
    })
    newTodos[index] = newTodo

    context.setTodos(newTodos)

    console.log(`${newTodos[index].name} is modified`, newTodo)
  }

  const handleCloseModifyTodoDialog = () => {
    setOpen(false)
    console.log('close dialog')
  }

  return (
    <Layout home={true} title={'ALL'}>
      <AddTodoField onAdd={handleAdd}></AddTodoField>

      <TodoList
        items={context.todos}
        onWip={handleWip}
        onModify={handleModify}
        onDelete={handleDelete}
      ></TodoList>

      <ModifyTodoDialog
        editTodo={editTodo}
        open={open}
        onInput={handleInputModifyTodoDialog}
        onClose={handleCloseModifyTodoDialog}
      ></ModifyTodoDialog>
    </Layout>
  )
}

export default Home
