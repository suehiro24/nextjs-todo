import { useContext } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList } from 'components/TodoList'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'
import TodoContext from 'components/TodoContext'

const Home: NextPage = () => {
  const context = useContext(TodoContext)

  const handleAdd = (newTodoName: string) => {
    context.setTodos([
      ...context.todos,
      Todo.create(newTodoName, 'Short', null),
    ])
  }

  return (
    <Layout home={true} title={'ALL'}>
      <AddTodoField onAdd={handleAdd}></AddTodoField>

      <TodoList
        items={context.todos}
        onWip={context.updateTodoStatusByIndex('WIP')}
      ></TodoList>
    </Layout>
  )
}

export default Home
