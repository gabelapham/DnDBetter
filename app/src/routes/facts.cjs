const express = require("express");
const axios = require("axios");
// function to get the data from the API 
let getFacts = async () => {
    let response = await axios(`https://catfact.ninja/fact`);
    return response;
};
//controller function 
module.exports = async (req, res) => {
    let responseFact = await getFacts();
    res.send(responseFact.data.fact);
};