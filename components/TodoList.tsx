import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import Todo from 'data/Todo'
import { Dispatch, SetStateAction } from 'react'

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
    newItems[index] = newItems[index].changeStatus('Done', true)

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
                  checked={item.status === 'Done'}
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
