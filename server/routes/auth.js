const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST /api/v1/auth/register
router.post('/register', authController.register);

// @route   POST /api/v1/auth/login
router.post('/login', authController.login);

module.exports = router;
