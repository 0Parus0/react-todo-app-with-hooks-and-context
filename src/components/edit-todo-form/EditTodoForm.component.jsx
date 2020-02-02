import React,{ useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import useInputState from '../../custom-hooks/useInputState';
import { dispatchContext } from '../../contexts/todosContext'


const EditTodoForm = ({ id, task, toggleEditForm }) => {

  const [value, handleChange, reset] = useInputState(task);
  // const { editTodo } = useContext(todosContext);
  const dispatch  = useContext(dispatchContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    // editTodo(id, value);
    dispatch({type: 'EDIT', id, newTask:value});
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
