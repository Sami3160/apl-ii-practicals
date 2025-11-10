import { useState } from 'react';
import '../styles/TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editValue } : todo
    ));
    setEditId(null);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            
            {editId === todo.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => saveEdit(todo.id)}
                onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                autoFocus
                className="edit-input"
              />
            ) : (
              <span 
                className="todo-text"
                onDoubleClick={() => startEdit(todo)}
              >
                {todo.text}
              </span>
            )}
            
            <div className="todo-actions">
              <button 
                onClick={() => startEdit(todo)}
                className="edit-button"
                disabled={editId === todo.id}
              >
                ✏️
              </button>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {todos.length > 0 && (
        <div className="todo-stats">
          <span>{todos.filter(todo => !todo.completed).length} tasks left</span>
          {todos.some(todo => todo.completed) && (
            <button 
              onClick={() => setTodos(todos.filter(todo => !todo.completed))}
              className="clear-button"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
