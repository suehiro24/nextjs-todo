import Todo from 'data/Todo'

export const todos: Todo[] = []

for (let index = 1; index <= 10; index++) {
  const todo = Todo.create(`todo${index}`, 'Short', index)

  todos.push(
    todo,
    Todo.createChild(`todo${index}_child1`, 'Short', index, todo),
    Todo.createChild(`todo${index}_child2`, 'Short', index, todo),
    Todo.createChild(`todo${index}_child3`, 'Short', index, todo)
  )
}

console.log(todos)

export default todos
