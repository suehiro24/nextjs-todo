import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import Todo from 'data/Todo'
import { useState } from 'react'
import TodoListItemMenu from './TodoListItemMenu'

export type todoListMenuHandler = (todo: Todo, index: number) => void

export const TodoList = ({
  todos,
  onWip,
  onModify,
  onDelete,
}: {
  todos: Todo[]
  onWip: todoListMenuHandler
  onModify: todoListMenuHandler
  onDelete: todoListMenuHandler
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuOpenIndex, setMenuOpenIndex] = useState<null | number>(null)

  const handleOpenMenu =
    (index: number) => (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setMenuOpenIndex(index)
    }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setMenuOpenIndex(null)
  }

  return (
    <List>
      {todos.map((todo, index) => {
        return (
          <ListItem key={todo.uuid}>
            <ListItemButton onClick={() => onModify(todo, index)} dense>
              <ListItemText primary={todo.name} />
            </ListItemButton>
            <ListItemIcon>
              <TodoListItemMenu
                open={menuOpenIndex === index}
                anchorEl={anchorEl}
                onOpenMenu={handleOpenMenu(index)}
                onCloseMenu={handleCloseMenu}
                onWip={() => onWip(todo, index)}
                onModify={() => onModify(todo, index)}
                onDelete={() => onDelete(todo, index)}
              ></TodoListItemMenu>
            </ListItemIcon>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
