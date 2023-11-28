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
            var n = 0;
            switch (pClass) {
                case "Barbarian":
                    n = 1;
                    break;
                case "Bard":
                    n = 30;
                    break;
                case "Cleric":
                    n = 65;
                    break;
                case "Druid":
                    n = 95;
                    break;
                case "Fighter":
                    n = 121;
                    break;
                case "Monk":
                    n = 146;
                    break;
                case "Paladin":
                    n = 180;
                    break;
                case "Ranger":
                    n = 210;
                    break;
                case "Rogue":
                    n = 242;
                    break;
                case "Sorcerer":
                    n = 268;
                    break;
                case "Warlock":
                    n = 292;
                    break;
                case "Wizard":
                    n = 317;
                    break;
                default:
                    n = 0;
                    break;
            }
            const response = await client.get("/classes")
            setPost(response.data[n]);
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
