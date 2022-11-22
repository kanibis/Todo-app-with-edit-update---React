import React, {useState} from 'react';
import TodoForm from './TodoForm';

export default function Todo({text, todo, todos, setTodos, onEditClick}) {
    // const [edit, setEdit] = useState({id: null, value: ''})

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

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

    // const handleEdit = () => {
    //     setEdit({
    //         id: todo.id, value: todo.text
    //     })
    // }

    

    // const updateTodo = (todoId, newValue) => {
    //     setTodos(prev => prev.map((item) => item.id === todoId ? newValue : item))
    // }

    // const submitUpdate = value => {
    //     updateTodo(edit.id, value)
    //     setEdit({
    //         id: null,
    //         value: ''
    //     })
    // }

    // if (edit.id) {
    //     return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    // }

    return (
        <div className='todo'>
            <li className={`'todo-item' ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={() => onEditClick(todo)} className='edit-btn'>
                <i class="fas fa-edit"></i>
            </button>
            {/* <button onClick = {() => setEdit({id: todo.id, value: todo.text})} className='edit-btn'> 
                <i class="fa-light fa-pen-to-square"></i>
            </button> */}
            <button onClick = {handleComplete} className='complete-btn'> 
                <i className='fas fa-check'></i>
            </button>
            <button onClick = {handleDelete} className='trash-btn'> 
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )

}