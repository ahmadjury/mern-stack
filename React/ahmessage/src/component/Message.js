import react, {useState} from 'react';

const Message= (props)=>{  
   
    console.log(props.getMsg);
    return(
        <>
        <h1>new message</h1>
        <pre>{props.getMsg}</pre>
        </>
    );
};

export default Message;