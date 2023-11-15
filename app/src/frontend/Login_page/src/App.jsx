import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function App() {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setError('');
    }, [username, password])

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
            setIsLoggedIn(true); // Make sure to set the logged-in state
        }
    }, []);

    const handleSetAuth = (data) => {
        setAuth(data);
        localStorage.setItem('auth', JSON.stringify(data)); // Save to local storage
    };


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/auth/login', { username, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(res?.status));
            console.log(JSON.stringify(res));
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            if (res.status === 200) {
                handleSetAuth({ username, roles, accessToken });
                setUsername('');
                setPassword('');
                setIsLoggedIn(true);
            }
        } catch (err) {
            if (!err?.response) {
                setError('No Server Response');
            } else if (err.response?.status === 400) {
                setError('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setError('Unauthorized');
            } else {
                setError('Login Failed');
            }
            errRef.current.focus();
        }



    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/auth/register', { username, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(res?.data));

            if (res.status === 201) {
                setUsername('');
                setPassword('');
            } else {
                // Handle other statuses as needed
                setError('Registration failed.');
            }
        } catch (err) {
            if (!err?.response) {
                setError('No Server Response');
            } else if (err.response?.status === 400) {
                setError('Missing Username or Password');
            } else if (err.response?.status === 409) {
                setError('Username already in use'); // Example for conflict status
            } else {
                setError('Registration Failed');
            }
            errRef.current.focus();
        }

    };

    const handleLogout = () => {
        setAuth(null);
        localStorage.removeItem('auth');
        setIsLoggedIn(false);
    };

    return (
        <>
            {isLoggedIn ? (
                <div>
                    <h1>Already logged in</h1>
                    <button type="button" onClick={handleLogout} style={{
                        position: 'fixed',
                        bottom: '2%',
                        left: '2%'
                    }}>Logout</button>
                </div>
            ) : (
                <div className="App">
                    <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">{error}</p>
                    <h1>Login Page</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                ref={userRef}
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="button" onClick={handleLogin}>Login</button>
                        <p>Don't have an account?  <button type="button" onClick={handleSignup}>Sign Up</button></p>
                    </form>
                </div>
            )}
        </>
    );
}
export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [fact, setFact] = useState('No fact');

//     let getFacts = async () => {
//         try {
//             let response = await axios(``);
//             setFact(response.data.fact); // Assuming the fact is stored in `response.data.fact`
//             console.log(response);
//         } catch (error) {
//             console.error('Error fetching fact:', error);
//             setFact('Failed to fetch fact');
//         }
//     };

//     return (
//         <div className="App">
//             <p>{fact}</p>
//             <button onClick={getFacts}>Get Fact</button>
//         </div>
//     );
// }

