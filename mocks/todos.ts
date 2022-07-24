import { Todo } from 'components/TodoList'

export const todos: Todo[] = []
for (let index = 0; index < 10; index++) {
  const item: Todo = {
    name: `todo${index}`,
    checked: false,
  }
  todos.push(item)
}

export default todos
