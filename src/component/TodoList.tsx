import React from 'react'
import TodoItem from './TodoItem'

type Todo = {
    id: number;
    text: string;
}

type TodoListProps = {
    todos : Todo[];
    deleteTodo: (id: number) => void;
}

function TodoList({todos, deleteTodo}: TodoListProps) {
  return (
    <ul>
        {todos.map(todo => {
            return <TodoItem 
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
            />
        })}
    </ul>
  )
}


export default TodoList;