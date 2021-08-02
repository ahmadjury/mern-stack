import React, {useState} from 'react';
import Form from './component/Form';
import Message from './component/Message'
import './App.css';

function App() {
  const [previewMsg,setPreviewMsg] = useState("");
  const setmessage=(message)=>{
    setPreviewMsg(message);
  }
  
  return (
    
      <>
      <Form  msgToApp={setmessage} />
      <Message getMsg={previewMsg}/>
      </>
    
  );
};

export default App;
