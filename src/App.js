import './App.css';
import React, {useState, useEffect} from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EditForm from './components/EditForm';

function App() {
  // State stuff
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  
  // const [editingText, setEditingText] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // UseEffect
  useEffect(() => {
    handleFilter()
  }, [todos, status])

  // Functions
  const handleFilter = () =>  {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  // Edit Form
  function onEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    // console.log(currentTodo);
  }

  function onEditFormSubmit(e) {
      e.preventDefault();

      handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTodo) {
      const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
  }

  function onEditClick(todo) {
      setIsEditing(true);
      setCurrentTodo({ ...todo });
  }

  // Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={onEditInputChange}
          onEditFormSubmit={onEditFormSubmit}
        />
      ) : (
      <TodoForm 
        input={input} 
        setInput={setInput} 
        todos={todos} 
        setTodos={setTodos}
        setStatus = {setStatus}
      />
      )}
      <TodoList todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos} onEditClick={onEditClick}
      />
    </div>
  );
}

export default App;
