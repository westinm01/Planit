import React, { useState } from 'react';
import '../SignUp.css';
import NavBar from "./NavBar";

import logo from '../PlanItLogo2.png';


const SignUp = ({Login, error}) =>{
    const [details, setDetails] = useState({name: "",email: "",password: ""});
    
    const submitHandler = e =>{
        e.preventDeafault();
        Login(details);
    }
    return(
    <div className ="contaier">
      
        <div className ="SignUpPage">
            <img src={logo} className="Top-logo" alt="Top-logo" />
            <NavBar />
    
     <div class="form-center">
        <form onSubmit={submitHandler}>
            <div className='formInner'>
                <h2>Sign Up Here</h2>
                {(error !== "")?(<div className="error"></div>):""}
                <div className='formGroup'>
               
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' 
                    onChange={e => setDetails({...details, name: e.target.value})}value={details.name}/>
               
                </div>
                <div className='formGroup'>  
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' 
                    onChange={e => setDetails({...details, email: e.target.value})}value={details.email}/>
                </div>
                <div className='formGroup'>  
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password'
                    onChange={e => setDetails({...details, password: e.target.value})}value={details.password}/>
                </div>
                
                <input type='submit' value='Click to sign up' />
            </div>
        </form>
        </div>
      </div>
    </div>  
    )
};
export default SignUp;