import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'

type Task = { name: string; checked: boolean }

const initialItems: Task[] = []
for (let index = 0; index < 10; index++) {
  const item: Task = {
    name: `task${index}`,
    checked: false,
  }
  initialItems.push(item)
}

export default function Tasklist({ children }: { children?: React.ReactNode }) {
  const [items, setItems] = useState<Task[]>(initialItems)

  const clickCheckBox = (index: number) => {
    const newItems = items.slice()
    newItems[index].checked = !items[index].checked

    setItems(newItems)

    console.warn('following item is updated', newItems[index])
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
