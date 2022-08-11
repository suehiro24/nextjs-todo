import Todo, { TodoStatus } from 'data/Todo'
import TodosService, {
  AddTodoInputs,
  ModifyTodoInputs,
} from 'data/TodosService'
import todos from 'mocks/todos'
import { createContext, Dispatch, useContext, useReducer } from 'react'

const TodosContext = createContext<Todo[]>([])
export const useTodos = () => {
  return useContext(TodosContext)
}

const TodosDispatchContext = createContext<Dispatch<TasksReducerAction>>(
  () => {}
)
export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext)
}

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, todos)

  return (
    <TodosContext.Provider value={tasks}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

type TasksReducerAction =
  | {
      type: 'add'
      payload: AddTodoInputs
    }
  | {
      type: 'modify'
      target: Todo
      payload: ModifyTodoInputs
    }
  | {
      type: 'delete'
      target: Todo
    }
  | {
      type: 'focus'
      target: Todo
    }
  | {
      type: 'status'
      target: Todo
      to: TodoStatus
    }

const tasksReducer = (todos: Todo[], action: TasksReducerAction) => {
  switch (action.type) {
    case 'add': {
      return TodosService.addTodo(todos, action.payload)
    }
    case 'modify': {
      return TodosService.modifyTodo(todos, action.target, action.payload)
    }
    case 'status': {
      return TodosService.updateTodoStatus(todos, action.target, action.to)
    }
    case 'focus': {
      return TodosService.focus(todos, action.target)
    }
    }
    case 'delete': {
      return TodosService.deleteTodo(todos, action.target)
    }
  }
}
