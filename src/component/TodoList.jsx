import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, deleteTodo}) {
  
  // key={todo.id}
  // todo={todo}
  // deleteTodo={deleteTodo}

  return (
    <ul>
        {todos.map(todo => {
            console.log("todo map : " + todo.id);
            <TodoItem 
              key={todo.id}
            />
        })}
    </ul>
  )
}

export default TodoList;
