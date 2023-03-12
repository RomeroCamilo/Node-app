//LOG IN FORM COMPONENT
import React, { useState, useEffect } from 'react';

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
      
      //Trying a post request to login.
      try {
        const response = await fetch('/post/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ user: username, password })
        });
  
        //data will store the response from '/post/login'
        const data = await response.json();
  
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
      <div className="container">
        <form className="container" onSubmit={handleSubmit}>
        <h1 class="title">LOGIN PAGE</h1>
            <label htmlFor="username">USERNAME</label>
            <input className="textboxStyle" id="username" type="text" value={username} onChange={handleUsernameChange} /> 
            <label htmlFor="password">PASSWORD</label>
            <input className="textboxStyle" id="password" type="password" value={password} onChange={handlePasswordChange} />
          <div className="buttons">
            <button className="buttonStyle" type="submit">LOGIN</button>
            <button className="buttonStyle" type="button">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }

  export default LoginForm;