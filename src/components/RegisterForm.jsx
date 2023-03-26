import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from 'react-router-dom';


export default function RegisterForm() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bag, setBag, isLoggedIn, setIsLoggedIn, password, setPassword, username, setUsername] = useOutletContext();


  const redirect = useNavigate()


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password === confirmPassword) {
      // setIsLoggedIn(true)
      setIsLoggedIn(prevLoggedIn => !prevLoggedIn)
      setUsername(username)
      setPassword(password)
      console.log(username)
      console.log(isLoggedIn ? "succesfully logged in." : "Logged in failed.")
      alert(`Welcome, ${username}!`)
      redirect('/home')
    } else if (password !== confirmPassword) {
      // setIsLoggedIn(false)
      console.log(isLoggedIn)
      setPassword("")
      setConfirmPassword("")
      alert("Password didn't match. Try again")
    }

    // Your registration logic goes here
  };

  return (
    <div className="form-card">
      <div className="form-title">
        <h2 className="form-logo">MAAV</h2>
        <h3 className="form-subtitle">Sign-up</h3>
      </div>

      <form
        onSubmit={handleSubmit} className="form">

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Create</button>
      </form>
      <span>Don't have an account? <Link style={{ textDecoration: 'underline', color: 'blue' }} to='/login'>Login</Link></span>
    </div>


  );
};
