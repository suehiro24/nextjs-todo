import 'styles/globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { AppProps } from 'next/app'
import TodoContext from 'components/TodoContext'
import todos from 'mocks/todos'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [todosState, setTodos] = useState(todos)

  return (
    <TodoContext.Provider value={{ todos: todosState, setTodos: setTodos }}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  )
}

export default MyApp
