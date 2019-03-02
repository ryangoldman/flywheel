//user.route.js

const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/:id', user_controller.user_details);

module.exports = router;