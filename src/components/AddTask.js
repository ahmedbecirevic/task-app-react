import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [day, setDayTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!text) {
      alert('Please enter task text');
      return;
    }
    onAddTask({ text, day, reminder });
    setText('');
    setDayTime('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor=''>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor=''>Day Time</label>
        <input
          type='text'
          placeholder='Add Day Time'
          value={day}
          onChange={event => setDayTime(event.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={event => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
