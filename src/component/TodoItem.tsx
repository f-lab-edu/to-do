import React from 'react'
import type { Todo } from '../types'

type TodoItemProps = {
    todo: Todo;
    deleteTodo: (id: number) => void;
}

function TodoItem({todo, deleteTodo}: TodoItemProps) {
    return (
        <li className='flex items-center border-b border-teal-500 py-2' id={todo.id.toString()}>
            <span className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'>{todo.text}</span>
            <button
                className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' 
                onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem
