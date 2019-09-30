import React, { useEffect, useState } from 'react';
import useTodoHooks from '../hooks/todo/todo';

const todo = () => {
  const [todos, setTodos] = useState([]);

  const submit = () => {
    const { todoItem } = inputs;


    if (todoItem !== undefined) {
      setTodos((t) => [...t, {
        key: Math.ceil(Math.random()),
        item: todoItem,
      }]);

      reset('todoItem');
    }
  };

  const {
    inputs, handleInputChange, handleSubmit, reset,
  } = useTodoHooks({ todoItem: '' }, submit);

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="todoItem" onChange={handleInputChange} value={inputs.todoItem} placeholder="Enter something todo" />
        <button type="submit">Add</button>
      </form>
      <p>Current List</p>
      <ul>
        {todos.map((t) => <li key={t.key}>{t.item}</li>)}
      </ul>
    </div>
  );
};

export default todo;
