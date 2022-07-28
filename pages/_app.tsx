import 'styles/globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { AppProps } from 'next/app'
import TodoContext from 'components/TodoContext'
import { todos as mockTodos } from 'mocks/todos'
import { useState } from 'react'
import { TodoStatus } from 'data/Todo'

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState(mockTodos)

  const updateTodoStatusByIndex = (to: TodoStatus) => (index: number) => {
    const newTodos = todos.slice()
    newTodos[index] = newTodos[index].changeStatus(to, to === 'Done')

    setTodos(newTodos)

    console.log(`${newTodos[index].name}'s status is updated to ${to} `)
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, updateTodoStatusByIndex }}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  )
}

export default MyApp
