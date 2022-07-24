import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export type Todo = { name: string; checked: boolean }

export const TodoList = ({
  items,
  updateItemsHandler,
}: {
  items: Todo[]
  updateItemsHandler:
    | Dispatch<SetStateAction<Todo[]>>
    | ((newItems: Todo[]) => void)
}) => {
  const clickCheckBox = (index: number) => {
    const newItems = items.slice()
    newItems[index].checked = !items[index].checked

    updateItemsHandler(newItems)
  }

  return (
    <List>
      {items.map((item, index) => {
        return (
          <ListItem key={item.name}>
            <ListItemButton onClick={() => clickCheckBox(index)} dense>
              <ListItemText primary={item.name} />
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.checked}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
