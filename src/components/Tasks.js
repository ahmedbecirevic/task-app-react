import Task from './Task';

const Tasks = ({ items, onDelete, onToggle }) => {
  return (
    <>
      {items.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
