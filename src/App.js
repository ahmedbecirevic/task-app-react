import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import React, { useState } from 'react';

const TASKS_ARRAY = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Vet  Appointment',
    day: 'Feb 8th at 6:30pm',
    reminder: false,
  },
];

export const ShowFormContext = React.createContext({
  showAddForm: () => {},
  openToggle: false,
});

const App = () => {
  const [tasks, setTasks] = useState(TASKS_ARRAY);
  const [showForm, setShowForm] = useState(false);

  const showAddFormHandler = () => {
    setShowForm(prevValue => !prevValue);
  };

  const addTaskHandler = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks(prevTasks => {
      return [newTask, ...prevTasks];
    });
  };

  const deleteTaskHandler = id => {
    setTasks(prevTasks => {
      const tempTasks = prevTasks.filter(task => task.id !== id);
      return tempTasks;
    });
  };

  const toggleReminderHandler = id => {
    setTasks(prevTasks => {
      return prevTasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    });
  };

  return (
    <div className='container'>
      <ShowFormContext.Provider value={{ showAddForm: showAddFormHandler }}>
        <Header title='Tasks App' buttonTextToggle={showForm} />
      </ShowFormContext.Provider>
      {showForm && <AddTask onAddTask={addTaskHandler} />}
      {tasks.length > 0 ? (
        <Tasks
          items={tasks}
          onDelete={deleteTaskHandler}
          onToggle={toggleReminderHandler}
        />
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

// class App extends React.Component{
//   render() {
//     return <h1>Hello from class component</h1>
//   }
// }

export default App;