//LOG IN FORM COMPONENT
import React, { useState, useEffect } from 'react';

import {Link, useNavigate } from 'react-router-dom';


//importing my stylesheet.
import styles from '../stylesheets/signup.module.css';

//importing LoginForm component.
import LoginForm from '../components/LoginForm';


function SignUp() {

   //stating the var and the setter for username
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   //setting the username value as we change the input.
   const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  //setting the password value as we change the input.
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //input valiadation
  const validation = (username,password) =>{
    //user validation
    if(username === ''){
      alert("Username field empty");
      return;
    }
    else if(password === ''){
      alert("Password field empty");
      return;
    }
  }

  const navigate = useNavigate(); //use navigate hook.

  //function to handle validation and then do a post request to our express server.
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    //input validation
    validation(username,password);
    
    //Post request to log-in.
    //only can use await in an async function.
    try {
      const response = await fetch('/post/added', { //awaits for the response of the fetch request. the response is the promise.
        method: 'POST', // post request.
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user: username, password }) // sending our form data to our server post request.
      });

      //data will store the response from '/post/login'
      const data = await response.json(); // await will wait for the result of response.json. response json is the promise.
      
      //checking the data from response.json after post request
      if(data === `Username already exists.`){
        alert("Username already exists.");
      }
      else if(data === `Succesfully signed up!`){
        alert("Sign up succesful! Going back to home page.")
        navigate('/'); // if login is succesful, we will navigate to the home page.
      }
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  
    //returing the form component with the script above with styling
    //onChange updates the stored name/password value as usertypes.
    return (
      <div className={styles.container}>
       <form className={styles.container} onSubmit={handleSubmit} >
         <h1 class={styles.title}>SIGNUP</h1>
         <label htmlFor="username">USERNAME</label>
         <input className={styles.textboxStyle} id="username" type="text" value={username} onChange={handleUsernameChange}/> 
         <label htmlFor="username">PASSWORD</label>
         <input className={styles.textboxStyle} id="password" type="text" value={password} onChange={handlePasswordChange}  /> 
         <div className="buttons">
            <button className={styles.buttonStyle} type="submit">CREATE</button>
            <Link to ="/"><button className={styles.buttonStyle} id="signup" type="button">BACK</button></Link>
          </div>
      </form>
    </div>
    );

  }

  export default SignUp;