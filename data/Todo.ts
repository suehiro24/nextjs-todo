import { cloneDeep } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export const todoStatus = ['Done', 'WIP', 'Todo'] as const
export type TodoStatus = typeof todoStatus[number]
export const todoTerm = ['Short', 'Medium', 'Long'] as const
export type TodoTerm = typeof todoTerm[number]
export type TodoPriority = number | null

export class Todo {
  private constructor(
    public readonly uuid: string,
    public readonly name: string,
    public readonly status: TodoStatus,
    public readonly term: TodoTerm,
    public readonly priority: TodoPriority,
    private _children: Todo[]
  ) {}

  public static create(name: string, term: TodoTerm, priority: TodoPriority) {
    return new Todo(uuidv4(), name, 'Todo', term, priority, [])
  }

  public get children(): Todo[] {
    return this._children
  }

  public addChildren(...todos: Todo[]): void {
    this._children.push(...todos)
  }

  public removeChild(index: number): Todo {
    const removedChild = cloneDeep(this._children[index])
    this._children = this._children.splice(index, 1)
    return removedChild
  }

  public changeStatus = (
    status: TodoStatus,
    changeChildren: boolean = false
  ) => {
    if (changeChildren) {
      this.children.forEach((child, index, children) => {
        children[index] = child.changeStatus(status, true)
      })
    }

    return new Todo(
      this.uuid,
      this.name,
      status,
      this.term,
      this.priority,
      this.children
    )
  }

  public update = (name: string, term: TodoTerm, priority: TodoPriority) => {
    return new Todo(this.uuid, name, this.status, term, priority, this.children)
  }
}

export default Todo
