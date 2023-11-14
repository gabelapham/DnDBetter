const db = require('../models');

const Spell = db.bardSpell;

//create spell

const addSpell = async (req, res) => {
    let info = {
        level: req.body.level,
        spell_name: req.body.spell_name,
        description: req.body.description,
        school: req.body.school,
        casting_time: req.body.casting_time,
        range: req.body.range,
        duration: req.body.duration,
        component: req.body.component
    }

    const spell = await Spell.create(info);
    res.status(200).send(spell);
};

const getSpells = async (req, res) => {
    let level = req.params.level;

    let spells = await Spell.findAll({ where : {level: level}});
    res.status(200).send(spells);
}

module.exports = {
    addSpell,
    getSpells
}