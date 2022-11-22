import React from 'react' 
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos,  onEditClick }) {
    
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {/* {todos.map((todo) => ( */}
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
        
        {/* <TodoForm onSubmit={addTodo}/> */}
    </div>
  )
}

export default TodoList