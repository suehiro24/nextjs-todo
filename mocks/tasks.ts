import { Task } from 'components/TaskList'

export const tasks: Task[] = []
for (let index = 0; index < 10; index++) {
  const item: Task = {
    name: `task${index}`,
    checked: false,
  }
  tasks.push(item)
}

export default tasks
