import React, { useState } from 'react';

const TodoItem = ({ task, deleteTask, editTask, toggleCompleteTask, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editInput.trim()) {
      editTask(index, editInput);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="justify-between items-center p-2 mb-2 bg-white  rounded text-black">
      <div className="flex items-center">
        
        <button
          onClick={toggleCompleteTask}
          className={`mr-4 text-2xl ${task.completed ? 'text-green-500' : 'text-red-300'}`}
        >
          {task.completed ? '✓' : '✔️'}
        </button>

        
        {isEditing ? (
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className="flex-1 px-2 py-1 rounded border focus:outline-none focus:border-romance"
          />
        ) : (
          <span className="cursor-pointer flex-1">
            {task.text}
          </span>
        )}
      </div>

      <div className="flex items-center space-x-2">
        
        <button
          onClick={handleEdit}
          className="px-2 py-1 bg-pink-400 text-white rounded hover:bg-pink-600"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>

        
        <button
          onClick={deleteTask}
          className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
