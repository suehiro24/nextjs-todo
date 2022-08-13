import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import Todo from 'data/Todo'
import TodosService from 'data/TodosService'
import { useCallback, useState } from 'react'
import ExpandMore from './ExpandMoreIconButton'
import TodoListItemMenu from './TodoListItemMenu'

export type todoListMenuHandler = (todo: Todo, index: number) => void

export const TodoList = ({
  todos,
  onWip,
  onFocus,
  onModify,
  onDelete,
  parent,
}: {
  todos: Todo[]
  onWip: todoListMenuHandler
  onFocus: todoListMenuHandler
  onModify: todoListMenuHandler
  onDelete: todoListMenuHandler
  parent?: Todo
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuOpenTodo, setMenuOpenTodo] = useState<Todo | null>(null)

  const handleOpenMenu =
    (todo: Todo) => (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setMenuOpenTodo(todo)
    }

  const handleCloseMenu = (todo: Todo) => () => {
    setAnchorEl(null)
    setMenuOpenTodo(null)
  }

  const isMenuOpenTodo = useCallback(
    (todo: Todo) => {
      return menuOpenTodo?.uuid === todo.uuid
    },
    [menuOpenTodo]
  )

  const [expandedTodos, setExpandedTodos] = useState<Todo[]>([])

  const handleExpandClick = (todo: Todo) => () => {
    const newExpandedTodos = isExpandedTodo(todo)
      ? expandedTodos.filter(expTodo => expTodo.uuid !== todo.uuid)
      : [...expandedTodos, todo]
    setExpandedTodos(newExpandedTodos)
  }

  const isExpandedTodo = useCallback(
    (todo: Todo) => {
      return !!expandedTodos.find(expTodo => expTodo.uuid === todo.uuid)
    },
    [expandedTodos]
  )

  const expandedTodoChildren = useCallback(
    (todo: Todo) => {
      const target = expandedTodos.find(expTodo => expTodo.uuid === todo.uuid)
      return target ? TodosService.getChildren(todos, target) : []
    },
    [todos, expandedTodos]
  )

  const hasChildren = useCallback(
    (todo: Todo) => TodosService.getChildren(todos, todo).length > 0,
    [todos]
  )

  return (
    <List disablePadding>
      {todos.map((todo, index) => {
        return (
          <div key={todo.uuid}>
            {/* Parents */}
            {todo.parentUuid === parent?.uuid ? (
              <ListItem dense>
                <ExpandMore
                  disabled={!hasChildren(todo)}
                  expand={isExpandedTodo(todo)}
                  onClick={handleExpandClick(todo)}
                  aria-expanded={isExpandedTodo(todo)}
                  aria-label="show more"
                />

                <ListItemButton
                  sx={{ pl: 1 }}
                  onClick={
                    hasChildren(todo)
                      ? handleExpandClick(todo)
                      : () => onModify(todo, index)
                  }
                >
                  <ListItemText primary={todo.name} />
                </ListItemButton>

                {!hasChildren(todo) ? (
                  <ListItemIcon>
                    <IconButton onClick={() => onFocus(todo, index)}>
                      <CenterFocusStrongIcon />
                    </IconButton>
                  </ListItemIcon>
                ) : null}

                <ListItemIcon>
                  <TodoListItemMenu
                    open={isMenuOpenTodo(todo)}
                    anchorEl={anchorEl}
                    onOpenMenu={handleOpenMenu(todo)}
                    onCloseMenu={handleCloseMenu(todo)}
                    onWip={() => onWip(todo, index)}
                    onModify={() => onModify(todo, index)}
                    onDelete={() => onDelete(todo, index)}
                  ></TodoListItemMenu>
                </ListItemIcon>
              </ListItem>
            ) : null}

            {/* Children */}
            <Collapse
              sx={{ ml: 1 }}
              in={isExpandedTodo(todo)}
              timeout={0}
              unmountOnExit
            >
              <TodoList
                todos={expandedTodoChildren(todo)}
                onWip={onWip}
                onFocus={onFocus}
                onModify={onModify}
                onDelete={onDelete}
                parent={todo}
              />
            </Collapse>
          </div>
        )
      })}
    </List>
  )
}

export default TodoList
