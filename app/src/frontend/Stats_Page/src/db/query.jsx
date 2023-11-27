import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3001/auth/register";

function DbQuery() {
    /*
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

    if (!post) return null;

    return (
    <>
        <p>
            {post.message}
        </p>
    </>
    )
    */
    const [num, setNum] = useState(0)

    function handleQuery() {
        const res = axios.post('http://localhost:3001/statsapp').then((response) => {
            setNum(response.data)
        });
    }

   return (
    <>
        <p>
            {num}
        </p>
        <button onClick={() => handleQuery()}>Hit Me</button>
    </>
   )
}
export default DbQuery;
