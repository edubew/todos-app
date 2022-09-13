import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './TodoContainer';
import './index.css';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
