import React,{useState} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [name,setName]=useState([]);
    const[error,setError]=useState("");
    const handleClick =(e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => setName(response.data.results))
        .catch(error => setError("no data"))
    }
    return (
        <div>
            <button onClick={handleClick}>Fi</button>
            {name.map((item,index) =><li key ={index} >{item.name}</li>
            )}
        </div>
    )
}

export default Pokemon
