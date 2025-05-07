import React from 'react'

function TodoItem({todo, deleteTodo}) {
    
    return (
        <li id={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem
