import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/system'
import { useState } from 'react'

export const AddTodoField = ({
  clickAddIconHandler,
}: {
  clickAddIconHandler: (newTodoName: string) => void
}) => {
  const [newTodoName, setNewTodoName] = useState<string>('')

  const addTodo = () => {
    if (!newTodoName) return
    clickAddIconHandler(newTodoName)
    setNewTodoName('')
  }

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        label="Add Todo"
        variant="standard"
        value={newTodoName}
        onChange={e => setNewTodoName(e.target.value)}
      ></TextField>
      <IconButton aria-label="add todo" onClick={addTodo}>
        <AddIcon></AddIcon>
      </IconButton>
    </Box>
  )
}
