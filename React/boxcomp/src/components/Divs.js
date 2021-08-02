import React, {useState} from 'react';


const Divs = (props) => {
    console.log(props.boxes);
    const a = props.boxes ;
    return (
        <div style={{display:'flex'}}>
       
            
            {a.map( (item,index) =>  {    return(  
                      <div key={index} style= {{width:'200px', height:'200px', backgroundColor: item}}>{item}</div>
            )} 
            )}
    
        

        </div>
    )
}


export default Divs;