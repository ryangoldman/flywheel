//user.route.js

const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/show', user_controller.user_all);
router.get('/:id', user_controller.user_details);
router.post('/create', user_controller.user_create);

module.exports = router;