import React, { useContext } from 'react';

import Paper  from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import  Divider  from '@material-ui/core/Divider';

import Todo from '../todo/Todo.component';
import { todosContext } from '../../contexts/todosContext'

const TodoList = () => {
  const { todos } = useContext(todosContext);
  if(todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            <Todo
             {...todo}
           />
            { i < todos.length -1 && <Divider/>}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
  return null
}

export default TodoList
