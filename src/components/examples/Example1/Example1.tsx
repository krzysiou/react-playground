'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { Example1Styled } from './Example1.styles';

interface TodoProps {
  index: number;
  todo: string;
  onDelete: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ index, todo, onDelete }) => (
  <li>
    {todo}
    <button onClick={() => onDelete(index)}>Delete</button>
  </li>
);

const Example1: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const deleteTodo = (index: number) => {
    const nextTodos = todos.filter((_, i) => i !== index);
    setTodos(nextTodos);
  };

  const addTodo = useCallback(() => {
    if (inputValue.trim() !== '') {
      setTodos((previousTodos) => [...previousTodos, inputValue]);
      setInputValue('');
    }
  }, [inputValue]);

  useEffect(() => {
    const addTodoOnEnter = (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    };

    document.addEventListener('keypress', addTodoOnEnter);

    return () => document.removeEventListener('keypress', addTodoOnEnter);
  }, [addTodo]);

  const todosComponent = (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} onDelete={deleteTodo} />
      ))}
    </ul>
  );

  return (
    <Example1Styled>
      <p className="hero">Todo App</p>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter your todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {todosComponent}
    </Example1Styled>
  );
};

export { Example1 };
