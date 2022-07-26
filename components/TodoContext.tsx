import Todo from 'data/Todo'
import todos from 'mocks/todos'
import { createContext, Dispatch, SetStateAction } from 'react'

const TodoContext = createContext<{
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>> | (() => void)
}>({
  todos,
  setTodos: () => {},
})

export default TodoContext
