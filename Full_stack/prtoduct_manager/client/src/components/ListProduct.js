import react from 'react'
import axios from 'axios';

const ListProduct =(props)=>{
     console.log(props.product);
    return(

    <div>
        <h1>hello</h1>
        {props.product.map((prod, idx) =>{
            
             return <p key ={idx}>{prod.title}</p>
        })}

    </div>
    )
}
export default ListProduct;