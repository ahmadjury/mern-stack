import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastaName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password,ConfirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }value={ firstName } />
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastaName(e.target.value) }value={ lastName } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <table>
            <tr>
            <td>first name </td>
            <td>{firstName}</td>
            </tr>
            <tr>
            <td>last  name </td>
            <td>{lastName}</td>
            </tr>
            <tr>
            <td>Email </td>
            <td>{email}</td>
            </tr>
            <tr>
            <td>Password </td>
            <td>{password}</td>
            </tr>
            <tr>
            <td>Confirm Password </td>
            <td>{ConfirmPassword}</td>
            </tr>
        </table>
        </>
    );
};
export default UserForm;