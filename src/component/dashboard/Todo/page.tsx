import React from 'react';
import './todo.css';

const TaskArea: React.FC = () => {
  return (
    <div className="task-area">
      <ul className="task-list">
        <li><input type="checkbox" /> Enter Text</li>
        <li><input type="checkbox" /> don’t hesitate</li>
        <li><input type="checkbox" /> add a new task</li>
      </ul>
      <div className="add-task-form">
        <h3>Task name</h3>
        <input type="text" placeholder="Description" className="task-input" />
        <div className="button-group">
          <button>Goal type</button>
          <button>Choose Date</button>
          <button>Set reminder</button>
          <button>...</button>
        </div>
        <div className="action-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="add-button">Add task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskArea;
