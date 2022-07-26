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
  onWip: MouseEventHandler
  onModify: MouseEventHandler
  onDelete: MouseEventHandler
}) => {
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
        <MenuItem onClick={onWip}>WIP</MenuItem>
        <MenuItem onClick={onModify}>Modify</MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export default TodoListItemMenu
