import Todo, { TodoStatus } from './Todo'

export class TodoService {
  public static findIndex(todos: Todo[], targetTodo: Todo) {
    const result = todos.findIndex(todo => todo.uuid === targetTodo.uuid)
    if (result === -1) throw new Error('')
    return result
  }

  public static focusOn(todos: Todo[], targetTodo: Todo) {
    const newTodos = todos.slice()

    const alreadyFocusedTodoIdx = newTodos.findIndex(todo => todo.isFocused)
    if (alreadyFocusedTodoIdx > -1) {
      newTodos[alreadyFocusedTodoIdx] =
        newTodos[alreadyFocusedTodoIdx].unFocus()
    }

    const targetIndex = this.findIndex(todos, targetTodo)

    newTodos[targetIndex] = newTodos[targetIndex].focus()

    return newTodos
  }

  public static updateTodoStatus(todos: Todo[], target: Todo, to: TodoStatus) {
    const newTodos = todos.slice()

    const targetIndex = TodoService.findIndex(todos, target)
    newTodos[targetIndex] = target.changeStatus(to, to === 'Done')

    console.log(
      `${target.name}'s status is updated from ${target.status} to ${to} `
    )

    return newTodos
  }
}

export default TodoService
