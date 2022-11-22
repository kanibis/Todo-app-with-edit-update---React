import React, {useState} from 'react'

function TodoForm({input, setInput, todos, setTodos, setStatus}) {
    // const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(e)
    }    

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = {text: input, completed: false, id: Math.floor(Math.random()*10000)}
        
        setTodos([...todos, newTodo])
        
        setInput('')
    }

    const handleStatus = (e) => {
        // console.log(e)
        setStatus(e.target.value)
    }

  return (
    <form className="todo-form" onSubmit = {handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a todo" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange}
            autoComplete="off"
            required
        />
        <button type="submit" className='todo-button'>
            <i className="fa-regular fa-square-plus"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={handleStatus}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default TodoForm