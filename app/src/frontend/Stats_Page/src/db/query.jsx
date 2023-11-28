import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:3001/statsapp"
});

function DbQuery() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        async function getPost() {
            const response = await client.get()
            setPost(response.data[0])
        }
        getPost();
    }, []);

    if (!post) return ""

   return (
    <>
    <div>
        <p>
            {post.description}
        </p>
    </div>
    </>
   )
   };

   export default DbQuery;
