import React, {createContext} from 'react';

import useTodoState from '../custom-hooks/useTodosState';

const defaultTodos = [
  {id: 1, task: 'Mow the lawn', completed: false},
  {id: 2, task: 'Rearrange the pots in garden', completed: false}
]
export const todosContext = createContext();

const TodosProvider = (props) =>{
  // const {todos, toggleTodo, addTodo, removeTod, editTod } = useTodoState(defaultTodos);
  const todosStuff = useTodoState(defaultTodos);


  return (
    <todosContext.Provider value={todosStuff}>
      {props.children}
    </todosContext.Provider>
  )
}

export default TodosProvider;

