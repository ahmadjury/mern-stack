import React,{useState} from 'react'
import axios from 'axios';

const Form = () => {

    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

   

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description    
        })

    
        .then(res=>console.log(res)) //here must add res.data to ListProduct
        .catch(err=>console.log(err))
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                title:<input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                description:<input type="text" onChange={(e) =>setDescription(e.target.value)} value={description} />
                price:<input type="number" onChange={(e)=>setPrice(e.target.value)} value ={price} />
                <input type='submit' />
            </form>
        </div>
            )
    }


export default Form;
