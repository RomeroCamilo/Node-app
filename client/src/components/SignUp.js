//LOG IN FORM COMPONENT
import React, { useState, useEffect } from 'react';

import {Router, Routes, Route, Link} from 'react-router-dom';

//importing my stylesheet.
import styles from '../stylesheets/signup.module.css';


function SignUp() {
  
    //returing the form component with the script above with styling
    //onChange updates the stored name/password as user types
    return (

      
      <div className={styles.container}>
       <form className={styles.container} >
         <h1 class={styles.title}>SIGNUP</h1>
         <div className="buttons">
            <button className={styles.buttonStyle} type="submit">CREATE</button>
            <Link to ="/"><button className={styles.buttonStyle} id="signup" type="button">BACK</button></Link>
          </div>
      </form>
    </div>
    );

  }

  export default SignUp;