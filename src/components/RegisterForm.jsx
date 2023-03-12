import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [{ isLogin }, setIsLogin] = useOutletContext()

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
    console.log(isLogin)
    // Your registration logic goes here
  };

  console.log(isLogin)

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

        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>
    </div>


  );
};
