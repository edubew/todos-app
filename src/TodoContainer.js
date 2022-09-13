import React from 'react';
import TodosList from './components/TodosList';
import Header from './components/Header';

const TodoContainer = () => (
  <div className="todos__container">
    <Header />
    <TodosList />
  </div>
);

export default TodoContainer;
