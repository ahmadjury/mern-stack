import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import ListProduct from './components/ListProduct';

function App() {
  const[product,setProduct]=useState([]);
  useEffect (()=>{
    axios.get('http://localhost:8000/api/products')
    .then(res=>{
     console.log(product);
        setProduct(res.data);
      })
 },[])
  return (
    <div className="App">
     <Form />  
     <ListProduct product={product} /> 
    </div>
  );

}
export default App;
