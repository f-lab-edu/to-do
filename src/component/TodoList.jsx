import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, deleteTodo}) {
  console.log(' todos : ' , todos );
  return (
    <ul>
        {todos.map(todo => {
            console.log(' todo check : ' , todo );
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
