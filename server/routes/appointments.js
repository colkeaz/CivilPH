const express = require('express');
const router = express.Router();

// Mock Appointment Routes

// @route   POST /api/v1/appointments
router.post('/', async (req, res) => {
  const { engineerId, consultationType, scheduledDate, scheduledTime, address, notes } = req.body;
  // TODO: Implement actual MariaDB insertion
  res.status(201).json({
    message: 'Appointment created successfully (Mock)',
    data: {
      id: 'apt_123',
      engineerId,
      consultationType,
      scheduledDate,
      scheduledTime,
      status: 'pending'
    }
  });
});

// @route   GET /api/v1/appointments
router.get('/', async (req, res) => {
  // TODO: Implement actual MariaDB query based on logged in user
  res.status(200).json({
    message: 'List of appointments (Mock)',
    data: []
  });
});

module.exports = router;
