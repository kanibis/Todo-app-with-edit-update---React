import React from 'react' 
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos,  onEditClick }) {
    
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <Todo 
                    key={todo.id} 
                    text={todo.text} 
                    todo = {todo}
                    todos={todos} 
                    setTodos={setTodos}
                    onEditClick={onEditClick}   
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList