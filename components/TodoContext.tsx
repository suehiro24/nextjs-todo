import Todo, { TodoStatus } from 'data/Todo'
import todos from 'mocks/todos'
import { createContext, Dispatch, SetStateAction } from 'react'

const TodoContext = createContext<{
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>> | (() => void)
  updateTodoStatusByIndex: (to: TodoStatus) => (index: number) => void
}>({
  todos,
  setTodos: () => {},
  updateTodoStatusByIndex: () => () => {},
})

export default TodoContext
