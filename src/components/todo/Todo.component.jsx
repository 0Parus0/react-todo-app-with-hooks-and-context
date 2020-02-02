import React, { useContext } from 'react';

import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import useToggleState from '../../custom-hooks/useToggleState';
import EditTodoForm from '../edit-todo-form/EditTodoForm.component';
import { todosContext } from '../../contexts/todosContext'

const Todo = ({ id, task, completed }) => {

  const [isEditing, toggle] = useToggleState(false);
  const {removeTodo, toggleTodo} = useContext(todosContext)
  
  const handleRemove = () => {
    removeTodo(id)
  };

  const handleCompleted = () => {
    toggleTodo(id)
  }

  return (
    <ListItem key={id} style={{height: '64px'}}>
    {
      isEditing ? <EditTodoForm  id={id} task={task} toggleEditForm={toggle}/> 
      : <React.Fragment>
          <Checkbox tabIndex={-1} checked={completed} onClick={handleCompleted}/>
          <ListItemText
            style={{textDecoration: completed ? 'line-through' : 'none'}}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
    }
      
    </ListItem>
  )
}

export default Todo
