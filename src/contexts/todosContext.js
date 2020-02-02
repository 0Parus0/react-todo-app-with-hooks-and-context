import React, {createContext} from 'react';

// import useTodoState from '../custom-hooks/useTodosState';
import todosReducer from '../reducers/todos.reducer';
import useLocalStorageReducer from '../custom-hooks/useLocalStorageReducer'

const defaultTodos = [
  {id: 1, task: 'Mow the lawn', completed: false},
  {id: 2, task: 'Rearrange the pots in garden', completed: false}
]
export const todosContext = createContext();
export const dispatchContext = createContext();

const TodosProvider = (props) =>{
  // const {todos, toggleTodo, addTodo, removeTod, editTod } = useTodoState(defaultTodos);
  // const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer('todos',defaultTodos, todosReducer );


  return (
    <dispatchContext.Provider value={ dispatch }>
      <todosContext.Provider value={ todos }>
        {props.children}
      </todosContext.Provider>
    </dispatchContext.Provider>
  )
}

export default TodosProvider;

