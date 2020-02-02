import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { AppBar } from '@material-ui/core';


import TodoList from '../todo-list/TodoList.component';
import TodoForm from '../todo-form/TodoForm.component';

import TodosProvider from '../../contexts/todosContext';



const TodoApp= () => {
 

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
    }}
    elevation={0}
    >    
     <AppBar color='primary' position='static' style={{height:'64px'}}>
      <Toolbar> 
        <Typography>TODOS WITH HOOKS</Typography>
      </Toolbar>
     </AppBar>
     <Grid container justify='center' style={{
       marginTop: '1rem'
     }}>
       <Grid item xs={11} md={8} lg={4}>
         <TodosProvider>
           <TodoForm />
           <TodoList />
         </TodosProvider>
       </Grid>
     </Grid>
    </Paper>
  )
}

export default TodoApp
