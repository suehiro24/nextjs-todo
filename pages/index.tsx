import type { NextPage } from 'next'
import Layout from '../components/layout'
import Tasklist from '../components/tasklist'

const Home: NextPage = () => {
  return (
    <Layout home={true} title={'Todo List'}>
      <Tasklist></Tasklist>
    </Layout>
  )
}

export default Home
