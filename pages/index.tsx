import { useContext } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList } from 'components/TodoList'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'
import TodoContext from 'components/TodoContext'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const context = useContext(TodoContext)
  const router = useRouter()

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
    console.log('modify', index)
  }

  const handleDelete = (index: number) => {
    const newTodos = context.todos.slice()
    newTodos.splice(index, 1)
    context.setTodos(newTodos)
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
    </Layout>
  )
}

export default Home
