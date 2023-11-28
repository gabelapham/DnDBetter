import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
//import './query.css'

//import { useAxios } from 'use-axios-client';

const client = axios.create({
    baseURL: "http://localhost:3001"
});

/*
function ClassQuery() {
    const { data, error, loading } = useAxios({
        url: "https://jsonplaceholder.typicode.com/posts/1"
    });

    if (loading || !data) return "Loading...";
    if (error) return "Error!";

    return (
        <div>
            <p>{data.body}</p>
        </div>
    )
}
export default ClassQuery;
*/

const ClassQuery = ({pClass}) => {
    const [post, setPost] = useState(null)

    //useEffect(() => {
        async function getPost() {
            const response = await client.get("/classes");
            testFunc();
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
            setPost(response.data[n]);
            //setTest('End of Async Func')
        }

        getPost();
    //}, []);

    if (!post) return ""

   return (
    <>
        {post.features}
    </>
    )
};

export default ClassQuery;
