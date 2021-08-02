import React,{useState} from 'react';


function Form(props) {

    const [color, setColor] = useState("");
 
    const handleColor = (e) => {
        setColor(e.target.value);
    }
 
    const handleSubmit = (e) => {
        props.addBox(color);
        setColor("");
        e.preventDefault();
    }

    return (
            <form onSubmit={handleSubmit}>
                <label for="color" >Color:</label>
                <input type="text" id="color" value={color} onChange={handleColor} />
                <input type="submit" value="Add" />
            </form>
    )
}

export default Form