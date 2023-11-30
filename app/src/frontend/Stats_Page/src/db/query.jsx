import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './query.css'

const client = axios.create({
    baseURL: "http://localhost:3001"
});

const Query = ({pClass, level, race}) => {
    const [post, setPost] = useState(null);
    const [equip, setEquip] = useState(null);
    const [lang, setLang] = useState(null);
    var langResponse;
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
            switch (race) {
                case "Dragonborn":
                    langResponse = await client.get("/races/dragonborn");
                    setLang(langResponse.data[8]);
                    break;
                case "Dwarf":
                    langResponse = await client.get("/races/dwarf");
                    setLang(langResponse.data[10]);
                    break;
                case "Elf":
                    langResponse = await client.get("/races/elf");
                    setLang(langResponse.data[9]);
                    break;
                case "Gnome":
                    langResponse = await client.get("/races/gnome");
                    setLang(langResponse.data[7]);
                    break;
                case "Half-Elf":
                    langResponse = await client.get("/races/halfelf");
                    setLang(langResponse.data[7]);
                    break;
                case "Halfling":
                    langResponse = await client.get("/races/halfling");
                    setLang(langResponse.data[7]);
                    break;
                case "Half-Orc":
                    langResponse = await client.get("/races/halforc");
                    setLang(langResponse.data[9]);
                    break;
                case "Human":
                    langResponse = await client.get("/races/human");
                    setLang(langResponse.data[5]);
                    break;
                case "Tiefling":
                    langResponse = await client.get("/races/tiefling");
                    setLang(langResponse.data[7]);
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
        <p id='language'>
            {lang.Features}
        </p>
    </>
    )
};

export default Query;