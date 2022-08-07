import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import Todo, {
  TodoPriority,
  TodoStatus,
  todoStatus,
  todoTerm,
  TodoTerm,
} from 'data/Todo'
import { useEffect, useState } from 'react'

export const ModifyTodoDialog = ({
  editTodo,
  open,
  onInput,
  onClose,
  onCancel,
}: {
  editTodo?: Todo
  open: boolean
  onInput: (newTodo: Todo) => void
  onClose: () => void
  onCancel?: () => void
}) => {
  const [name, setName] = useState<string>('')
  const [term, setTerm] = useState<TodoTerm>('Short')
  const [priority, setPriority] = useState<TodoPriority>(null)

  useEffect(() => {
    if (!editTodo) return
    setName(editTodo.name)
    setTerm(editTodo.term)
    setPriority(editTodo.priority)
  }, [editTodo])

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>Modify Todo</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        <TextField
          id="todo-name"
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <FormControl variant="standard" fullWidth style={{ minWidth: 100 }}>
          <InputLabel id="todo-term-label">Term</InputLabel>
          <Select
            id="todo-term"
            value={term}
            label="Term"
            onChange={e => setTerm(e.target.value as TodoTerm)}
          >
            {todoTerm.map((term: TodoTerm) => {
              return (
                <MenuItem key={term} value={term}>
                  {term}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <TextField
          id="todo-priority"
          value={priority ?? ''}
          label="Priority"
          type="number"
          onChange={e =>
            e.target.value === ''
              ? setPriority(null)
              : setPriority(Number(e.target.value))
          }
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel ? () => onCancel() : () => onClose()}>
          Cancel
        </Button>
        <Button
          onClick={
            editTodo
              ? () => onInput(editTodo.update(name, term, priority))
              : () => {}
          }
        >
          Modify
        </Button>
      </DialogActions>
    </Dialog>
  )
}
