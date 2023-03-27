import React, { useState, useEffect } from 'react';
//importing routes, route, link for navigating between pages.
import {Router, Routes, Route, Link} from 'react-router-dom';
//importing LoginForm component.
import LoginForm from './components/LoginForm';

//importing SignupForm component.
import SignupForm from './components/SignUp.js';

//importing my stylesheet.
//import './stylesheets/App.css';


//our main app.
//setting up our routes for our component, so when we use link in a compomenet, use the paths below.
function App() {
  return (
    <Routes>
      <Route index path='/' element={< LoginForm/>} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
