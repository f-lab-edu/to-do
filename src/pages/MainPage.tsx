import { useState, useEffect } from 'react';
import '@/css/App.css';
import TodoForm from '@/component/TodoForm';
import TodoList from '@/component/TodoList';
import type { Todo } from '@/types';

function MainPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

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

  const getCurrentTodos = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    return todos.slice(startIndex, startIndex + itemPerPage);
  }

  const totalPages = Math.ceil(todos.length / itemPerPage);

  const addTodo = (text: string): void => {
    if (text.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
    };

    //setTodos([...todos, newTodo]);
    setTodos([newTodo, ...todos]);
    setCurrentPage(1);
  };

  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='m-8 text-2xl'>To Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={getCurrentTodos()} deleteTodo={deleteTodo} />

      {totalPages > 1 && (
        <div className='mt-4 flex items-center gap-2'>
          <button 
            className='mr-3 text-gray-400'
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </button>
          
          {/* 페이지 번호들 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`mr-3 p-8 rounded ${
                currentPage === page 
                  ? 'bg-orange-300 text-black' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className='bg-pink-200'
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
      
      // <div>
      //   <button className='mr-8 text-gray-400 '>이전</button>
      //   <button className='text-gray-400 '>다음</button>
      // </div>
  
}

export default MainPage;
