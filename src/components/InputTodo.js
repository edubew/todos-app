import React, { useState } from 'react';

const InputTodo = () => {
  const [input, setInput] = useState('');

  return (
    <form className="todo__form">
      <input type="text" placeholder="Add a todo" value={input} name="text" />
      <button type="submit" className="todo__button">Add todo</button>
    </form>
  );
};

export default InputTodo;
