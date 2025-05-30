import TodoItem from './TodoItem';
import type { Todo } from '../types';

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
};

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul className='w-96'>
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </ul>
  );
}

export default TodoList;
