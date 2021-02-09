const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/UserControllers');

router.get('/stored/cource', userControllers.storedCource);
router.get('/stored/trash', userControllers.trashCource);
router.delete('/stored/trash/:id', userControllers.fouceDelete);


module.exports = router;
