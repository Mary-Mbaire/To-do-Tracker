import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate }) => {
    const groupedTasks = tasks.reduce((groups, task) => {
      if (!groups[task.category]) {
        groups[task.category] = [];
      }
      groups[task.category].push(task);
      return groups;
    }, {});

    return (
        <div>
      {Object.keys(groupedTasks).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {groupedTasks[category].map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={onUpdate} />
          ))}
        </div>
      ))}
    </div>

    );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TaskList;