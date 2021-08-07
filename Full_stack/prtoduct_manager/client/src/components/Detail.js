import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Detail = (props) => {
    const [oneproduct,setoneproduct]= useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+props.id)
        
        .then(res=>setoneproduct(res.data))
    },[])
    return (
        <div>
            <h1>hii</h1>
        <h1>{oneproduct.title}</h1>
        {/* <p>{oneproduct.description}</p>
        <p>{oneproduct.price}</p> */}
        </div>
    )
}

export default Detail
