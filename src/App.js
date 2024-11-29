import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import EditTaskModal from './EditTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const openEditModal = (task) => setTaskToEdit(task);

  const closeEditModal = () => setTaskToEdit(null);

  return (
    <div className="App">
      <h1>To-Do List with Categories</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onEdit={openEditModal} />
      {taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          onSave={(updatedTask) => {
            updateTask(updatedTask);
            closeEditModal();
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default App;

