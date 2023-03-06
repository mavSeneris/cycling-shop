import React, { useState } from "react";
import Navbar from "./Navbar";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
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
      </div>


  );
}