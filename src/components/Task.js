import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  const onDeleteTask = () => {
    onDelete(task.id);
  };

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'grey', cursor: 'pointer' }}
          onClick={onDeleteTask}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
