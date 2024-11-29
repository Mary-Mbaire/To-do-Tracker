import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ id: Date.now(), title, description, category, completed: false });
        setTitle('');
        setDescription('');
        setCategory('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      );
};

AddTaskForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

export default AddTaskForm;