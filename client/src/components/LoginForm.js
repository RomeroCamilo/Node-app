//LOG IN FORM COMPONENT
import React, { useState, useEffect } from 'react';

import {Router, Routes, Route, Link} from 'react-router-dom';

//importing my stylesheet.
import styles from '../stylesheets/login.module.css';


function LoginForm() {
  
    //stating the var and the setter for username
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
  
    //setting the username as we change the input.
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    
    //setting the password as we change the input.
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    //function to handle validation and then do a post request to our express server.
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      //user validation
      if(username === ''){
        alert("Username field empty");
        return;
      }
      else if(password === ''){
        alert("Password field empty");
        return;
      }
      
      //Post request to log-in.
      //only can use await in an async function.
      try {
        const response = await fetch('/post/login', { //awaits for the response of the fetch request. the response is the promise.
          method: 'POST', // post request.
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ user: username, password }) // sending our form data.
        });
  
        //data will store the response from '/post/login'
        const data = await response.json(); //await will wait for the result of response.json. response json is the promise.
        
        //checking the data from response.json after post request
        if(data === "Login worked."){
          alert("Login Sucessful.");
        }
        else if(data === "Invalid login."){
          alert("Login failed. Try again")
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    //returing the form component with the script above with styling
    //onChange updates the stored name/password as user types
    return (

      <div className={styles.container}>
        <form className={styles.container} onSubmit={handleSubmit}>
        <h1 class={styles.title}>LOGIN</h1>
            <label htmlFor="username">USERNAME</label>
            <input className={styles.textboxStyle} id="username" type="text" value={username} onChange={handleUsernameChange} /> 
            <label htmlFor="password">PASSWORD</label>
            <input className={styles.textboxStyle} id="password" type="password" value={password} onChange={handlePasswordChange} />
          <div className="buttons">
            <button className={styles.buttonStyle} type="submit">LOGIN</button>
            <Link to ="/signup"><button className={styles.buttonStyle} id="signup" type="button">SIGNUP</button></Link>
          </div>
        </form>
      </div>
    
    );
  }

  export default LoginForm;