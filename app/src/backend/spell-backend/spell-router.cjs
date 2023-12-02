// import { Router } from 'express';
const express = require('express');
const router = express.Router();
const bardSpellController = require('./bard-spell-controller.cjs');
// const clericSpellController = require('./cleric-spell-controller.cjs');
// import bardSpellController from "./bard-spell-controller.js"
// import clericSpellController from './cleric-spell-controller.js';


// const router = Router();


// router.get('/bardSpell', bardSpellController.getAll);

router.get('/getAll', bardSpellController.getAll);

router.get('/getAllByAttribute', bardSpellController.getAllByAttribute);

router.get('/getLevel', bardSpellController.getLevel);

router.get('/getSchool', bardSpellController.getSchool);

router.get('/getRange', bardSpellController.getRange);

router.get('/getDuration', bardSpellController.getDuration);

router.get('/getCastTime', bardSpellController.getCastTime);

// router.get('/bardSpell/getAllByAttribute', bardSpellController.getAllByAttribute);


// export default router;
module.exports = router;
