const express = require('express');
const router = express.Router();

const courceControllers = require('../app/controllers/CourceControllers');

router.get('/create', courceControllers.create);
router.post('/postCreate', courceControllers.postCreate);
router.get('/:slug', courceControllers.show);

module.exports = router;
