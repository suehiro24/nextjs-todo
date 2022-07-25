import Todo from 'data/Todo'

export const todos: Todo[] = []

for (let index = 1; index <= 10; index++) {
  const todo = Todo.create(`todo${index}`, 'Short', index)

  todo.addChildren(
    Todo.create(`todo${index}_child1`, 'Short', index),
    Todo.create(`todo${index}_child2`, 'Short', index)
  )

  todos.push(todo)
}

console.log(todos)

export default todos
