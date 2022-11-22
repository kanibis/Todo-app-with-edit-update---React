import React, {useState} from 'react';
import TodoForm from './TodoForm';

export default function Todo({text, todo, todos, setTodos, onEditClick}) {

    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const handleComplete = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            } 
            return item
        }
        ))
    }

    return (
        <div className='todo'>
            <li className={`'todo-item' ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={() => onEditClick(todo)} className='edit-btn'>
                <i class="fas fa-edit"></i>
            </button>
            <button onClick = {handleComplete} className='complete-btn'> 
                <i className='fas fa-check'></i>
            </button>
            <button onClick = {handleDelete} className='trash-btn'> 
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )

}