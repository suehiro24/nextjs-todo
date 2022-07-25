import { useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList } from 'components/TodoList'
import todos from 'mocks/todos'
import { AddTodoField } from 'components/AddTodoField'
import Todo from 'data/Todo'

const Home: NextPage = () => {
  const [items, setItems] = useState<Todo[]>(todos)

  const clickAddIconHandler = (newTodoName: string) => {
    setItems([...items, Todo.create(newTodoName, 'Short', null)])
  }

  return (
    <Layout home={true} title={'Todo List'}>
      <AddTodoField clickAddIconHandler={clickAddIconHandler}></AddTodoField>
      <TodoList items={items} updateItemsHandler={setItems}></TodoList>
    </Layout>
  )
}

export default Home
