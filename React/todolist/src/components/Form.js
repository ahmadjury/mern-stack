import React,{useState} from 'react';

const Form = (props) => {
    const [text,setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // add an object {completed, text} to tasks array 
        const task = {
            text,
            completed: false
        }
        props.addTask(task);
    }
    return (
        
        
        <form onSubmit={handleSubmit}  > 
        <h1>Add task</h1>
            <input type="text" value ={text} onChange = {(e)=> setText(e.target.value)} />
            <input type="submit" />
        </form>
    )
}
export default Form
