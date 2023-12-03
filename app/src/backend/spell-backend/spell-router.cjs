// import { Router } from 'express';
const express = require('express');
const router = express.Router();
const SpellController = require('./spell-controller.cjs');
// const clericSpellController = require('./cleric-spell-controller.cjs');
// import SpellController from "./bard-spell-controller.js"
// import clericSpellController from './cleric-spell-controller.js';


// const router = Router();


// router.get('/bardSpell', SpellController.getAll);

router.get('/getAll', SpellController.getAll);

router.get('/getAllByAttribute', SpellController.getAllByAttribute);

router.get('/getLevel', SpellController.getLevel);

router.get('/getSchool', SpellController.getSchool);

router.get('/getRange', SpellController.getRange);

router.get('/getDuration', SpellController.getDuration);

router.get('/getCastTime', SpellController.getCastTime);

// router.get('/bardSpell/getAllByAttribute', SpellController.getAllByAttribute);


// export default router;
module.exports = router;
