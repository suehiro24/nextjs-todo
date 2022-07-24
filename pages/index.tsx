import { useState } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import { Tasklist, Task } from '../components/tasklist'
import tasks from '../mocks/tasks'

const Home: NextPage = () => {
  const [items, setItems] = useState<Task[]>(tasks)

  return (
    <Layout home={true} title={'Todo List'}>
      <Tasklist items={items} updateItemsHandler={setItems}></Tasklist>
    </Layout>
  )
}

export default Home
