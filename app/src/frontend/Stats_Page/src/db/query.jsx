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
    const [raceFeat, setRaceFeat] = useState(null);
    const [feature, setFeature] = useState(null);
    var raceResponse;
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
                    raceResponse = await client.get("/races/dragonborn");
                    setLang(raceResponse.data[8]);
                    temp = "";
                    for (var i = 1; i < 8; i++) {
                        temp += raceResponse.data[i].Features;
                        temp += " ";
                    }
                    setRaceFeat(temp);
                    break;
                case "Dwarf":
                    raceResponse = await client.get("/races/dwarf");
                    setLang(raceResponse.data[10]);
                    break;
                case "Elf":
                    raceResponse = await client.get("/races/elf");
                    setLang(raceResponse.data[9]);
                    break;
                case "Gnome":
                    raceResponse = await client.get("/races/gnome");
                    setLang(raceResponse.data[7]);
                    break;
                case "Half-Elf":
                    raceResponse = await client.get("/races/halfelf");
                    setLang(raceResponse.data[7]);
                    break;
                case "Halfling":
                    raceResponse = await client.get("/races/halfling");
                    setLang(raceResponse.data[7]);
                    break;
                case "Half-Orc":
                    raceResponse = await client.get("/races/halforc");
                    setLang(raceResponse.data[9]);
                    break;
                case "Human":
                    raceResponse = await client.get("/races/human");
                    setLang(raceResponse.data[5]);
                    break;
                case "Tiefling":
                    raceResponse = await client.get("/races/tiefling");
                    setLang(raceResponse.data[7]);
                    break;
                default:
                    break;
            }
            setPost(profResponse.data[1]);
            setEquip(equipResponse.data[2]);
            var i = 3;
            var temp = "";
            while (profResponse.data[i].level <= level) {
                temp += profResponse.data[i].features;
                i++;
            }
            setFeature(temp)
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
        <p id='racialFeats'>
            {raceFeat}
        </p>
        <p id = "classFeats">
               {feature }
        </p>
    </>
    )
};

export default Query;