import { useState, useEffect } from 'react';
import '../css/App.css';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';
import type { Todo } from '../types';

function MainPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const originTodos = localStorage.getItem('todos');
    if (!originTodos) {
      return;
    }

    const userTodos = JSON.parse(originTodos);
    if (userTodos) {
      setTodos(userTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length === 0) {
      return;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string): void => {
    if (text.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='m-8 text-2xl'>To Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      <div>
        <button className='mr-8 text-gray-400 '>이전</button>
        <button className='text-gray-400 '>다음</button>
      </div>
    </div>
  );
}

export default MainPage;
