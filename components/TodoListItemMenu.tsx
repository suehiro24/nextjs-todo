import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { MouseEventHandler } from 'react'

export const TodoListItemMenu = ({
  open,
  anchorEl,
  onOpenMenu,
  onCloseMenu,
  onWip,
  onModify,
  onDelete,
}: {
  open: boolean
  anchorEl: HTMLElement | null
  onOpenMenu: MouseEventHandler
  onCloseMenu: () => void
  onWip: () => void
  onModify: () => void
  onDelete: () => void
}) => {
  const execHandlers = (handler: () => void) => () => {
    handler()
    onCloseMenu()
  }

  return (
    <>
      <IconButton aria-label="add todo" onClick={onOpenMenu}>
        <MoreVertIcon></MoreVertIcon>
      </IconButton>
      <Menu
        aria-labelledby="todo-list-item-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={execHandlers(onWip)}>WIP</MenuItem>
        <MenuItem onClick={execHandlers(onModify)}>Modify</MenuItem>
        <MenuItem onClick={execHandlers(onDelete)}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export default TodoListItemMenu
