import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TASKS_ARRAY = [];

export const ShowFormContext = React.createContext({
  showAddForm: () => {},
  openToggle: false,
});

const App = () => {
  const [tasks, setTasks] = useState(TASKS_ARRAY);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, [tasks]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  const showAddFormHandler = () => {
    setShowForm(prevValue => !prevValue);
  };

  const addTaskHandler = task => {
    axios
      .post('http://localhost:5000/tasks', {
        text: task.text,
        day: task.day,
        reminder: task.reminder,
      })
      .then(res => {
        setTasks(prevTasks => [...prevTasks, res.data]);
      });
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks(prevTasks => {
    //   return [newTask, ...prevTasks];
    // });
  };

  const deleteTaskHandler = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
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