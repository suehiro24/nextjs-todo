import Todo, { TodoStatus } from 'data/Todo'
import todos from 'mocks/todos'
import { createContext, Dispatch, SetStateAction } from 'react'

const TodoContext = createContext<{
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>> | (() => void)
  updateTodoStatus: (target: Todo, to: TodoStatus) => void
}>({
  todos,
  setTodos: () => {},
  updateTodoStatus: () => () => {},
})

export default TodoContext
