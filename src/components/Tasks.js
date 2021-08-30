import { useState } from 'react';

const Tasks = ({ items }) => {
  return (
    <>
      {items.map(task => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
