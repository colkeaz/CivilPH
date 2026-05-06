const express = require('express');
const router = express.Router();

// Mock Auth Routes

// @route   POST /api/v1/auth/register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  // TODO: implement actual registration logic with MariaDB
  res.status(201).json({
    message: 'User registered successfully (Mock)',
    user: { id: 'user_123', firstName, lastName, email, role }
  });
});

// @route   POST /api/v1/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // TODO: implement actual login logic with MariaDB
  res.status(200).json({
    message: 'Login successful (Mock)',
    token: 'mock_jwt_token_123',
    user: { id: 'user_123', email }
  });
});

module.exports = router;
