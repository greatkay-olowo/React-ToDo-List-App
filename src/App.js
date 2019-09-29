
import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, RemoveTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className='todo'>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => RemoveTodo(index)}>X</button>
      </div>
    </div >
  );
}


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder='Add ToDo' />
    </form>
  );
};





const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Learn about Hooks',
      isCompleted: false
    },
    {
      text: 'Learn about React-Router',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const RemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);


  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} RemoveTodo={RemoveTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div >
  );
}

export default App;