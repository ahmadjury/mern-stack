import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ListProduct =(props)=>{
     const {removeFromDom} =props;
     const deleteProduct=(personId) => {
         axios.delete('http://localhost:8000/api/products/' + personId)
         .then(res=>{
             removeFromDom(personId)
         })

     }
     console.log(props.product);
    return(

    <div>
        <h1>hello</h1>
        {props.product.map((prod, idx) =>{
            
             return <p key ={idx}>
                 <Link to = {"/products/"+prod._id}>{prod.title}</Link>  
                 <button onClick={(e)=> {deleteProduct(prod._id)}}>Delete</button> 
                 </p>  // try id not _id
        })}

    </div>
    )
}
export default ListProduct;