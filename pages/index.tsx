import { useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TodoList, Todo } from 'components/TodoList'
import todos from 'mocks/todos'

const Home: NextPage = () => {
  const [items, setItems] = useState<Todo[]>(todos)

  return (
    <Layout home={true} title={'Todo List'}>
      <TodoList items={items} updateItemsHandler={setItems}></TodoList>
    </Layout>
  )
}

export default Home
