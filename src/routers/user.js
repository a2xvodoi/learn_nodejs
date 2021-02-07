const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/UserControllers');

router.get('/stored/cource', userControllers.storedCource);


module.exports = router;
