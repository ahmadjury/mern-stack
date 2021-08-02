
import react, { useState } from 'react';

const Form =(props)=>{

    const [message,setMessage]=useState("");

    const handlemessage =(e)=>{
        e.preventDefault();
        props.msgToApp(message);

};



return(
    <form onSubmit={handlemessage}>
    <h1>write message here </h1>
        <textarea 
            placeholder="write here"
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
        ></textarea>
         <input type="submit" value="Send Message"/>
    </form>
    )
    
    
   

};

export default Form;