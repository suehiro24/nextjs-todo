import { useState } from 'react'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { TaskList, Task } from 'components/TaskList'
import tasks from 'mocks/tasks'

const Home: NextPage = () => {
  const [items, setItems] = useState<Task[]>(tasks)

  return (
    <Layout home={true} title={'Todo List'}>
      <TaskList items={items} updateItemsHandler={setItems}></TaskList>
    </Layout>
  )
}

export default Home
