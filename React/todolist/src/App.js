import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React,{useState} from 'react';

function App() {
  const[tasks,settasks] = useState([]);
  const addTask =(task) => {
    settasks([...tasks, task]);
  }
  const changeCompleted = (e, index) => {
    settasks([...tasks.slice(0,index),{...tasks[index] ,completed:e.target.checked} , ...tasks.slice(index+1)])
  }
  const deleteTask = (e,index) => {
    settasks([...tasks.slice(0,index),  ...tasks.slice(index+1)])
  }
  return (
    <div className="App">
   <Form addTask={addTask} />
   <Display tasks ={tasks} changeCompleted={changeCompleted} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
