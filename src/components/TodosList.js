import React, { useState } from 'react';
import InputTodo from './InputTodo';

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <InputTodo />
    </div>
  );
};

export default TodosList;
