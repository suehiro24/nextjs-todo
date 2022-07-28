import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/system'
import { useState } from 'react'

export const AddTodoField = ({
  onAdd,
}: {
  onAdd: (newTodoName: string) => void
}) => {
  const [newTodoName, setNewTodoName] = useState<string>('')

  const handleAdd = () => {
    if (!newTodoName) return
    onAdd(newTodoName)
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
      <IconButton aria-label="add todo" onClick={handleAdd}>
        <AddIcon></AddIcon>
      </IconButton>
    </Box>
  )
}
