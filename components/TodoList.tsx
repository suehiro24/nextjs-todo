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
}: {
  items: Todo[]
  onWip: (index: number) => void
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
            <ListItemButton
              onClick={() => {
                console.log('modify')
              }}
              dense
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
            <ListItemIcon>
              <TodoListItemMenu
                open={menuOpenIndex === index}
                anchorEl={anchorEl}
                onOpenMenu={handleOpenMenu(index)}
                onCloseMenu={handleCloseMenu}
                onWip={() => onWip(index)}
                onWip={changeStatus('WIP', index)}
                onModify={() => {
                  console.log('modify', index)
                }}
                onDelete={() => {
                  console.log('delete', index)
                }}
              ></TodoListItemMenu>
            </ListItemIcon>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
