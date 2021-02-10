const express = require('express');
const router = express.Router();

const courceControllers = require('../app/controllers/CourceControllers');

router.get('/create', courceControllers.create);
router.get('/:id/edit', courceControllers.edit);
router.post('/handle-form-action', courceControllers.handleFormAction);
router.put('/:id', courceControllers.update);
router.delete('/:id', courceControllers.destroy);
router.patch('/:id/restore', courceControllers.restore);
router.post('/postCreate', courceControllers.postCreate);
router.get('/:slug', courceControllers.show);

module.exports = router;
