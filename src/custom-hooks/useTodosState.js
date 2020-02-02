import { useState } from 'react';
import uuid from 'uuid'

const useTodosState = (initialTodos) => {

  const [todos, setTodos] = useState(initialTodos);


  const addTodo = newTodoText => {
    setTodos([...todos, { id:  uuid(), task: newTodoText, completed: false}]);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todoId !== todo.id);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, task: newTask} : todo
      )
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  };

};

export default useTodosState;