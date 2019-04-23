const express = require('express');
const router = express.Router();

// Require the controllers!!
const user_controller = require('../controllers/user.controller');


// create user
router.post('/create', user_controller.user_create);
// read user
router.get('/:id', user_controller.user_details);

module.exports = router;
