import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import ListProduct from './components/ListProduct';
import {Router} from '@reach/router';
import Detail from './components/Detail';



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
      <>
     <Form/>  
     <Router>
        <ListProduct product={product} path="/products" /> 
        <Detail path= "products/:id" />
      </Router>
      </>
    </div>
  );

}
export default App;
