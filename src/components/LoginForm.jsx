import React, { useState } from "react";
import { Link, redirect, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [bag, setBag, isLoggedIn, setIsLoggedIn, password, setPassword, username, setUsername] = useOutletContext();
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
    navigate('/')
    setIsLoggedIn(true)
    console.log(isLoggedIn)
  }

  function handlePrevPage(){
    navigate(-1)
  }


  return (

    <div className="form-card">
      <div className="form-title">
        <h2 className="form-logo">MAAV</h2>
        <h3 className="form-subtitle">Login</h3>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign-in</button>
      </form>
      <div>
        {/* <Link to='/sign-up'>Create an account</Link> */}
      </div >
      <span>Don't have an account? <Link style={{textDecoration: 'underline', color: 'blue'}}to='/sign-up'>Register</Link></span>

      <button className='login-back' onClick={handlePrevPage}>Back</button>
      
    </div>


  );
}