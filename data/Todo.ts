import { cloneDeep, map, result } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import TodosService from './TodosService'

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
    public readonly isFocused: boolean,
    private _rootUuid?: string,
    private _parentUuid?: string
  ) {}

  public static create(name: string, term: TodoTerm, priority: TodoPriority) {
    return new Todo(uuidv4(), name, 'Todo', term, priority, false)
  }

  public static createChild(
    name: string,
    term: TodoTerm,
    priority: TodoPriority,
    parent: Todo
  ) {
    return new Todo(
      uuidv4(),
      name,
      'Todo',
      term,
      priority,
      false,
      parent._rootUuid ?? parent.uuid,
      parent.uuid
    )
  }

  public get rootUuid(): string | undefined {
    return this._rootUuid
  }

  public get parentUuid(): string | undefined {
    return this._parentUuid
  }

  public changeStatus = (status: TodoStatus) => {
    return new Todo(
      this.uuid,
      this.name,
      status,
      this.term,
      this.priority,
      this.isFocused,
      this._rootUuid,
      this._parentUuid
    )
  }

  public update = (name: string, term: TodoTerm, priority: TodoPriority) => {
    return new Todo(
      this.uuid,
      name,
      this.status,
      term,
      priority,
      this.isFocused,
      this._rootUuid,
      this._parentUuid
    )
  }

  public canFocus = (todos: Todo[], throwable = false) => {
    return true

    const children = TodosService.getChildren(todos, this)
    const hasChildren = children.length > 0
    const result = !hasChildren // &&

    if (!throwable) return result

    if (hasChildren) {
      throw new Error(
        "Can't focus on this todo you have to finished child todos."
      )
    }
  }

  public focus = (todos: Todo[]) => {
    this.canFocus(todos, true)
    return new Todo(
      this.uuid,
      this.name,
      'WIP',
      this.term,
      this.priority,
      true,
      this._rootUuid,
      this._parentUuid
    )
  }

  public unfocus = () => {
    return new Todo(
      this.uuid,
      this.name,
      this.status === 'Done' ? 'Done' : 'WIP',
      this.term,
      this.priority,
      false,
      this._rootUuid,
      this._parentUuid
    )
  }
}

export default Todo
