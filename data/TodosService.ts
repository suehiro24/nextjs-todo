import Todo, { TodoPriority, TodoStatus, TodoTerm } from './Todo'

export type AddTodoInputs = {
  name: string
  term: TodoTerm
  priority: TodoPriority
}

export type ModifyTodoInputs = {
  name: string
  term: TodoTerm
  priority: TodoPriority
}

export class TodosService {
  public static getChildren(todos: Todo[], terget: Todo): Todo[] {
    return todos.filter(todo => todo.parentUuid === terget.uuid)
  }

  public static getParent(todos: Todo[], terget: Todo): Todo | undefined {
    return todos.find(todo => todo.uuid === terget.parentUuid)
  }

  public static addTodo(todos: Todo[], inputs: AddTodoInputs) {
    const newTodo = Todo.create(inputs.name, inputs.term, inputs.priority)
    const newTodos = [...todos, newTodo]
    console.log('addTodo', { newTodo }, { newTodos })
    return newTodos
  }

  public static modifyTodo(
    todos: Todo[],
    target: Todo,
    inputs: ModifyTodoInputs
  ) {
    const modifiedTodo = target.update(
      inputs.name,
      inputs.term,
      inputs.priority
    )
    const newTodos = todos.map(todo =>
      todo.uuid === modifiedTodo.uuid ? modifiedTodo : todo
    )
    console.log('modifyTodo', { modifiedTodo }, { newTodos })
    return newTodos
  }

  public static updateTodoStatus(todos: Todo[], target: Todo, to: TodoStatus) {
    const statusUpdatedTodo = target.changeStatus(to)
    const newTodos = todos.map(todo =>
      todo.uuid === target.uuid ? statusUpdatedTodo : todo
    )
    console.log('updateTodoStatus', { statusUpdatedTodo }, { newTodos })
    return newTodos
  }

  public static deleteTodo(todos: Todo[], target: Todo) {
    const newTodos = todos.filter(todo => todo.uuid !== target.uuid)
    console.log('deleteTodo', { target }, { newTodos })
    return newTodos
  }

  public static focus(todos: Todo[], target: Todo) {
    const alreadyFocusedTodo = todos.find(todo => todo.isFocused)

    const focusedTodo = target.focus(todos)

    const newTodos = todos.map(todo => {
      // switch focus todo
      if (todo.uuid === target.uuid) {
        return focusedTodo
      }
      if (alreadyFocusedTodo && todo.uuid === alreadyFocusedTodo.uuid) {
        return alreadyFocusedTodo.unfocus()
      }
      // unchanged todo
      return todo
    })

    console.log(
      'focusOn',
      { focusedTodo },
      { alreadyFocusedTodo },
      { newTodos }
    )
    return newTodos
  }

  public static unfocus(todos: Todo[], target: Todo) {
    const newTodos = todos.map(todo =>
      todo.uuid === target.uuid ? target.unfocus() : todo
    )

    console.log('unfocus', { target }, { newTodos })
    return newTodos
  }

  public static calcDonePerChildren(todos: Todo[], target: Todo) {
    const children = this.getChildren(todos, target)
    const nOfDone = children.reduce(
      (prev, curr, idx, ary) => (ary[idx].status === 'Done' ? prev + 1 : prev),
      0
    )
    return nOfDone / children.length
  }
}

export default TodosService
