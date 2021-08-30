import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from 'react';

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

const App = () => {
  const [tasks, setTasks] = useState(TASKS_ARRAY);

  return (
    <div className='container'>
      <Header title='Tasks App' />
      <Tasks items={tasks}></Tasks>
    </div>
  );
};

// class App extends React.Component{
//   render() {
//     return <h1>Hello from class component</h1>
//   }
// }

export default App;