import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [errorFirstName,seterrorFirstName ] = useState("");
    const [lastName, setLastaName] = useState("");
    const [errorLastName,seterrorLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, seterrorEmail] =useState("");
    const [password, setPassword] = useState("");  
    const [errorPassWord, seterrorPassWord] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    const [ errorConfirmPassword,seterrorConfirmPassword] = useState("");
    const [hasBeenSuppmitted,sethasBeenSuppmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password,ConfirmPassword };
        console.log("Welcome", newUser);
        sethasBeenSuppmitted(true);
    };
    const formMessage = () =>{
        if(hasBeenSuppmitted==false){
            return "please supmit the form"
        }else{
            return "thanks for supmitting the form"
        }
        
    }

    const handelfirstname = (e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            seterrorFirstName("that field must be at least 2 characters.");
        }else{
            seterrorFirstName("");
        }
        
        }
    const handellastname = (e)=>{
        setLastaName(e.target.value);
        if(e.target.value.length<2){
            seterrorLastName("that field must be at least 2 characters.");
        }else{
            seterrorLastName("");
        }
        
        }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            seterrorEmail(" field must be at least 5 characters.");
        }else{
            seterrorEmail("");
        }
        
        }
    const handlepassword = (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            seterrorPassWord(" field must be at least 8 characters.");
        }else{
            seterrorPassWord("");
        }
        
        }
    const handleconfirmpassword = (e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length<8){
            seterrorConfirmPassword(" field must be at least 8 characters.");
        }else if(e.target.value !=password){
            seterrorConfirmPassword("must match ")
        }else{
            seterrorConfirmPassword("")
        }
            
        }
        
        
   
    return(
        <>
        <form onSubmit={ createUser }>
            <h3>{formMessage()}</h3>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ handelfirstname } />
            </div>
             <div>
                <label>Last name: </label> 
                <input type="text" onChange={ handellastname } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlepassword} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleconfirmpassword } />
            </div> 
            <input type="submit" value="Create User" />
        </form>
        <table>
            <tr>
            <td>first name </td>
            <td>{firstName}</td>
            <td>{errorFirstName}</td>
            </tr>
            <tr>
            <td>last  name </td>
            <td>{lastName}</td>
            <td>{errorLastName}</td>
            </tr>
            <tr>
            <td>Email </td>
            <td>{email}</td>
            <td>{errorEmail}</td>
            </tr>
            <tr>
            <td>Password </td>
            <td>{password}</td>
            <td>{errorPassWord}</td>
            </tr>
            <tr>
            <td>Confirm Password </td>
            <td>{ConfirmPassword}</td>
            <td>{errorConfirmPassword}</td>
            </tr>
        </table>
        </>
    );
};

export default UserForm;