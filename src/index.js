import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './TodoContainer';
import './index.css';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
