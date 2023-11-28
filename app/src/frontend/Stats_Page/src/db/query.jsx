import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './query.css'

const client = axios.create({
    baseURL: "http://localhost:3001"
});

const ClassQuery = ({update, setUpdate, pClass}) => {
    const [post, setPost] = useState(null)
    getPost();
    //useEffect(() => {
        async function getPost() {
            const response = await client.get("/classes")
            switch (pClass) {
                case "Barbarian":
                    setPost(response.data[1]);
                    break;
                case "Bard":
                    setPost(response.data[20]);
                    break;
                default:
                    setPost(response.data[3]);
                    break;
            }
        }
    //    getPost();
    //}, []);

    if (!post) return ""

   return (update) ? (
    <>
    <div>
        <p id='prof'>
            {post.features}
        </p>
    </div>
    </>
   ) : ""
   };

   export default ClassQuery;
