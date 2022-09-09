/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
