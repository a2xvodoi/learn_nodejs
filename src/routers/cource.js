const express = require('express');
const router = express.Router();

const courceControllers = require('../app/controllers/CourceControllers');

router.get('/create', courceControllers.create);
router.get('/:id/edit', courceControllers.edit);
router.put('/:id', courceControllers.update);
router.delete('/:id', courceControllers.destroy);
router.post('/postCreate', courceControllers.postCreate);
router.get('/:slug', courceControllers.show);

module.exports = router;
