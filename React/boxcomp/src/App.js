import React,{useState} from 'react';
import Divs from './components/Divs';
import Form from './components/Form';

function App() {
  const [colors,setColors]=useState([]);

  const handleColor=(color)=>{
    setColors([...colors,color]);
  }
  return (
    <div className="App">
    <Form addBox={handleColor} />
    <Divs boxes={colors} />
    </div>
  );
}

export default App;
