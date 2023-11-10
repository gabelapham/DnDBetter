import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com:3306/login', { username, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>Register</button>
      </form>
    </div>
  );
}

export default App;
