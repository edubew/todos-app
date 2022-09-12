import React, { useState } from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

const TodoItem = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  return todos.map((todo, index) => (
    <li
      className={todo.isComplete ? 'todo__completed' : 'todo__row'}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
    >
      <input
        type="checkbox"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      />
      {todo.text}
      <div className="todo__icons">
        <MdDeleteSweep
          onClick={() => removeTodo(todo.id)}
          className="delete__icon"
        />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit__icon" />
      </div>
    </li>
  ));
};

export default TodoItem;
