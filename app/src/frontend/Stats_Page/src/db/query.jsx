import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:3001/classes"
});

function DbQuery() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        async function getPost() {
            const response = await client.get()
            setPost(response.data[1])
        }
        getPost();
    }, []);

    if (!post) return ""

   return (
    <>
    <div>
        <p>
            {post.features}
        </p>
    </div>
    </>
   )
   };

   export default DbQuery;
