import { useContext } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList } from 'components/TodoList'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'
import TodoContext from 'components/TodoContext'

const Home: NextPage = () => {
  const context = useContext(TodoContext)

  const clickAddIconHandler = (newTodoName: string) => {
    context.setTodos([
      ...context.todos,
      Todo.create(newTodoName, 'Short', null),
    ])
  }

  return (
    <Layout home={true} title={'Todo List'}>
      <AddTodoField clickAddIconHandler={clickAddIconHandler}></AddTodoField>
      <TodoList
        items={context.todos}
        updateItemsHandler={context.setTodos}
      ></TodoList>
    </Layout>
  )
}

export default Home
