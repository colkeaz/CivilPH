const bcrypt = require('bcrypt');
const db = require('../config/db');
const { generateToken } = require('../utils/tokenUtils');

// @desc    Register a new user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = async (req, res) => {
  const { firstName, lastName, email, password, role, phone } = req.body;

  try {
    // Check if user exists
    const users = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (users.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const result = await db.query(
      'INSERT INTO users (first_name, last_name, email, password_hash, role, phone) VALUES (?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword, role, phone]
    );

    const userId = result.insertId;

    // Generate token
    const token = generateToken(userId);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: userId,
        firstName,
        lastName,
        email,
        role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for user
    const users = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user.id);

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
};
