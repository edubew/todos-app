import React, { useState } from 'react';

const InputTodo = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a todo" value={input} name="text" onChange={handleChange} />
      <button type="submit" className="todo__button">Add todo</button>
    </form>
  );
};

export default InputTodo;
