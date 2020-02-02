import React,{ useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import useInputState from '../../custom-hooks/useInputState';
import { todosContext } from '../../contexts/todosContext'


const EditTodoForm = ({ id, task, toggleEditForm }) => {

  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(todosContext);

  console.log('Edit form is being rendered');

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  }

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '1rem'}}>
      <TextField
        margin='normal'
        value={value} 
        onChange={handleChange} 
        fullWidth 
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
