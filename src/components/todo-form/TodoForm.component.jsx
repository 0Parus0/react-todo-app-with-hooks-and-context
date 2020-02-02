import React,{ useContext } from 'react';

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';

import useInputState from '../../custom-hooks/useInputState';
import {todosContext} from '../../contexts/todosContext'

const TodoForm = () => {

  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(todosContext);

  console.log('TodoForm is being rendered');

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(value);
    reset();
  }
  return (
    <Paper style={{
      margin: '1rem 0',
      padding: '0 1rem',

    }}>
      <form onSubmit={handleSubmit}> 
        <TextField
          value={value}
          onChange={handleChange}
          margin= 'normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
