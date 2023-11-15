import { Router } from 'express';

// const bardSpellController = require('./bard-spell-controller.cjs');
// const clericSpellController = require('./cleric-spell-controller.cjs');
import bardSpellController from "./bard-spell-controller.js"
// import clericSpellController from './cleric-spell-controller.js';


const router = Router();

router.get('/bardSpell', bardSpellController.getAll);

router.get('/bardSpell/getAll', bardSpellController.getAll);

router.get('/bardSpell/getAllByName', bardSpellController.getAllByName);

router.get('/bardSpell/getAllByAttribute', bardSpellController.getAllByAttribute);


export default router;
// module.exports = router;