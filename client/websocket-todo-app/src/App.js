import './App.css';
import io from 'socket.io-client';
import Option from './components/views/Option'
import Button from './components/common/Button'
import { useState } from 'react'
import { useAsync } from "react-async"
const socket = io('localhost:8000');


function App() {

  const [task, setTask] =useState(
    [
      {
          id: 1,
          name: 'shopping'
      },
      {
          id: 2,
          name: 'go out with dog'
      }
  ]
  )
  const [textTask, setTextTask] = useState('')


  socket.on('conection',()=>{
    socket.emit('message',(task))
  });

  const removeTask = (id) => {

    setTask(task.filter(tas=>tas.id !== id))
    socket.emit('message',(task));
    
  }

  const  addTask =  (textTask) =>{
    
    setTask([...task, {id: task.length + 1, name: textTask }]);
    socket.emit('message',(task));
  }
  
  console.log(textTask)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <div className='options'>
          {task.map(
            position => <Option key={position.id} id={position.id} txt={position.name} action={removeTask}/>
          )}
        </div>
            <form>
              <input type="text" onChange={setup => setTextTask(setup.target.value)}></input>
            </form>
            <Button text={'ADD'} action={addTask} id={textTask}/>
        </body>  
    </div>
  );
}

export default App;
