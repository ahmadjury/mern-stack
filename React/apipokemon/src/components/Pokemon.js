import React,{useState} from 'react'

const Pokemon = () => {
    const [name,setName]=useState([]);
    const[error,setError]=useState("");
    const handleClick =(e) =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setName(response.results))
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
