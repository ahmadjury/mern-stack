import React, { useState } from 'react';
import './App.css';
import TabDisplay from './components/TabDisplay';
import TabShow from './components/TabShow';

function App() {
  const [currentList, setCurrentList] = useState([]);
  const [data, setData] = useState("");
  


  const newContent = (content) => {
      setData(content);
  }

  return (
      <>
          <TabShow data = {newContent}></TabShow>
          <TabDisplay content = {data}></TabDisplay>
      </>
  );
}

export default App;