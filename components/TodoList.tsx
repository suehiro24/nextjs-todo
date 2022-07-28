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

export const TodoList = ({
  items,
  onWip,
  onModify,
  onDelete,
}: {
  items: Todo[]
  onWip: (index: number) => void
  onModify: (index: number) => void
  onDelete: (index: number) => void
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
      {items.map((item, index) => {
        return (
          <ListItem key={item.name}>
            <ListItemButton onClick={() => onModify(index)} dense>
              <ListItemText primary={item.name} />
            </ListItemButton>
            <ListItemIcon>
              <TodoListItemMenu
                open={menuOpenIndex === index}
                anchorEl={anchorEl}
                onOpenMenu={handleOpenMenu(index)}
                onCloseMenu={handleCloseMenu}
                onWip={() => onWip(index)}
                onModify={() => onModify(index)}
                onDelete={() => onDelete(index)}
              ></TodoListItemMenu>
            </ListItemIcon>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
