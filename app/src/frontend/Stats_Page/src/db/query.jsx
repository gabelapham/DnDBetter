import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const dbQuery = () => {
    const [result, setResult] = useState('')

    const handleQuery = (event) => {
        //event.preventDefault();
        try {
            const res = axios.post('http://localhost:3001/statsapp');

            if (res.status === 600) {
                setResult("haha")
            } else {
                //setResult(stringify(res.status))
                setResult("nope")
            }
            //setResult(res);
            
            /*
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
            */
        } catch (err) {
            /*
            if (!err?.response) {
                setError('No Server Response');
            } else if (err.response?.status === 400) {
                setError('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setError('Unauthorized');
            } else {
                setError('Login Failed');
            }
            */
            setResult("dummy")
        }
    };
    
    return (
        <div>
            <p>
                {result}
            </p>
            <button type="button" onClick={() => handleQuery()}>CLICK ME</button>
        </div>
    )
}

export default dbQuery;