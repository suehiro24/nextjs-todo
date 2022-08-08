import 'styles/globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { AppProps } from 'next/app'
import TodoContext from 'components/TodoContext'
import { todos as mockTodos } from 'mocks/todos'
import { useState } from 'react'
import Todo, { TodoPriority, TodoStatus, TodoTerm } from 'data/Todo'
import TodoService from 'data/TodoService'

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState(mockTodos)

  const updateTodoStatus = (target: Todo, to: TodoStatus) => {
    setTodos(TodoService.updateTodoStatus(todos, target, to))
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, updateTodoStatus }}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  )
}

export default MyApp
