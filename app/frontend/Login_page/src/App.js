import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Add logic to handle login here
        console.log('Username:', username);
        console.log('Password:', password);
        // You can send a request to your authentication server here
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
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default App;
