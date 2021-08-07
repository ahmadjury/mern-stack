import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import ListProduct from './components/ListProduct';
import {Router} from '@reach/router';
import Detail from './components/Detail';
import Update from './components/Update'




function App() {
  const[product,setProduct]=useState([]);
  useEffect (()=>{
    axios.get('http://localhost:8000/api/products')
    .then(res=>{
     console.log(product);
      setProduct(res.data);
      })
    },[])

  const removeFromDom =(productId)=>{
    setProduct(product.filter(product => product._id != productId));
  }
  return (
    <div className="App">
      <>
     <Router>
        <Form path ="/" />  
        <ListProduct product={product} path="/products" removeFromDom={removeFromDom}/> 
        <Detail path= "products/:id" />
        <Update path="products/edit/:id" />
        
      </Router>
      
      </>
    </div>
  );
  }
export default App;
