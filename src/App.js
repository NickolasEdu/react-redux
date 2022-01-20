import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [inputTask, setInputTask] = useState()
  const tasks = useSelector(state => state.data)
  const dispatch = useDispatch()

  const handleInput = e => {
    setInputTask(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask
    })
  }

  const handleRemove = () => {
    alert('ok')
  }

  return (
    <>
      <ul>
        {
          tasks.map(task => 
            <li
              key={task}>
              {task}
              <button onClick={() => handleRemove(task)}>X</button>
            </li>
          )
        }
      </ul>
      <input type="text" onChange={handleInput} value={inputTask} />
      <button onClick={handleSubmit}>New Task</button>
    </>
  );
}

export default App;
