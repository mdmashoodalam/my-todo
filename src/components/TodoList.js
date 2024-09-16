import React, { useState } from 'react';
import TodoItem from './TodoItem';
import ParticlesBackground from './ParticlesBackground'; 

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = { text: taskInput, completed: false }; 
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const toggleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle the completed status
    setTasks(updatedTasks);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Particles Background */}
      <ParticlesBackground />

      <div style={{
        position: 'absolute',
        border: '2px solid #ddd',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        minWidth:'250px',  
        maxWidth:'800px',
        height: '620px',
        backdropFilter: 'blur(2px)', // Blurs the background
        zIndex: 10,
      }}>
        <h1 style={{ textAlign: 'center',color:'white', fontWeight: 'bold', fontSize:'25px' }}>To-Do List</h1>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter your task"
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '0.5rem',
              outline: 'none'
            }}
          />
          <button
            onClick={addTask}
            style={{
              marginLeft: '1rem',
              padding: '0.05rem 1rem',
              backgroundColor: '#f56565',
              color: '#ffff',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ 

          listStyle: 'initial', 
          padding: 11,
          margin: 0,
          maxHeight: '450px',
          overflow: 'auto',
          wordWrap: 'break-word',
          wordBreak: 'break-word', 
            }}>
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              deleteTask={() => deleteTask(index)}
              editTask={editTask}
              toggleCompleteTask={() => toggleCompleteTask(index)}
              style={{ 
                backgroundColor: 'white',  // Set background to white
                color: 'black',}}
            />
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default TodoList;
