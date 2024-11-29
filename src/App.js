import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <div className="App">
      <h1>To-Do List with Categories</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} />
    </div>
  );
};

export default App;

