import { useLocation, useNavigate } from 'react-router-dom';
import type { Todo } from '../types';
import { useState } from 'react';

function DetailTodoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const todoId: number = location.state.id;

  const todosString = localStorage.getItem('todos');
  const todos: Todo[] = todosString ? JSON.parse(todosString) : [];
  const currentTodo: Todo | undefined = todos.find(
    (todo: Todo) => todo.id === todoId
  );

  const [todoValue, setTodoValue] = useState(currentTodo?.text || '-' );

  const goList = () => {
    navigate('/');
  };

  const deleteTodo = () => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    goList();
  };

  const updateTodo = () => {
    const newTodos = todos.map(todo => (todo.id === todoId)? {id:todoId , text:todoValue} : todo ); 
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='m-8 text-2xl'>상세 페이지</h1>
      <textarea className='resize-y rounded-md mb-8'
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}>
      </textarea>
      <div>
        <button className='btn btn-blue mr-4' onClick={updateTodo}>
          수정
        </button>
        <button className='btn btn-blue mr-4' onClick={deleteTodo}>
          삭제
        </button>
        <button className='btn btn-blue mr-4' onClick={goList}>
          목록
        </button>
      </div>
    </div>
  );
}

export default DetailTodoPage;
