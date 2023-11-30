import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './query.css'

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

const ClassQuery = ({pClass, level, race}) => {
    const [post, setPost] = useState(null);
    const [equip, setEquip] = useState(null);
    var profResponse;
    var equipResponse;

    useEffect(() => {
        async function getPost() {
            switch (pClass) {
                case "Barbarian":
                    profResponse = await client.get("/classes/barbarian");
                    equipResponse = await client.get("/classes/barbarian");
                    break;
                case "Bard":
                    profResponse = await client.get("/classes/bard");
                    equipResponse = await client.get("/classes/bard");
                    break;
                case "Cleric":
                    profResponse = await client.get("/classes/cleric");
                    equipResponse = await client.get("/classes/cleric");
                    break;
                case "Druid":
                    profResponse = await client.get("/classes/druid");
                    equipResponse = await client.get("/classes/druid");
                    break;
                case "Fighter":
                    profResponse = await client.get("/classes/fighter");
                    equipResponse = await client.get("/classes/fighter");
                    break;
                case "Monk":
                    profResponse = await client.get("/classes/monk");
                    equipResponse = await client.get("/classes/monk");
                    break;
                case "Paladin":
                    profResponse = await client.get("/classes/paladin");
                    equipResponse = await client.get("/classes/paladin");
                    break;
                case "Ranger":
                    profResponse = await client.get("/classes/ranger");
                    equipResponse = await client.get("/classes/ranger");
                    break;
                case "Rogue":
                    profResponse = await client.get("/classes/rogue");
                    equipResponse = await client.get("/classes/rogue");
                    break;
                case "Sorcerer":
                    profResponse = await client.get("/classes/sorcerer");
                    equipResponse = await client.get("/classes/sorcerer");
                    break;
                case "Warlock":
                    profResponse = await client.get("/classes/warlock");
                    equipResponse = await client.get("/classes/warlock");
                    break;
                case "Wizard":
                    profResponse = await client.get("/classes/wizard");
                    equipResponse = await client.get("/classes/wizard");
                    break;
                default:
                    break;
            }
            setPost(profResponse.data[1]);
            setEquip(equipResponse.data[2]);
        }
        getPost();
    },);

    if (!post) return ""

   return (
    <>
        <p id='prof'>
            {post.features}
        </p>
        <p id='equipment'>
            {equip.features}
        </p>
    </>
    )
};

export default ClassQuery;
