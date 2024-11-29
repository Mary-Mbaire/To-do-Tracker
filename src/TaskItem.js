import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onUpdate }) => {
    const toggleComplete = () => {
      onUpdate({ ...task, completed: !task.completed });
    };

    return (
        <div>
          <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </h3>
          <p>{task.description}</p>
          <button onClick={toggleComplete}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
        </div>
      );
    };

    TaskItem.propTypes = {
        task: PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired,
        }).isRequired,
        onUpdate: PropTypes.func.isRequired,
      };
      
      export default TaskItem;