const express = require('express');
const router = express.Router();

// Mock Payment Routes

// @route   POST /api/v1/payments/create-intent
router.post('/create-intent', async (req, res) => {
  const { appointmentId, amount, paymentMethod } = req.body;
  // TODO: Implement PayMongo API call
  res.status(200).json({
    message: 'Payment intent created (Mock)',
    clientKey: 'mock_paymongo_client_key_123',
    amount,
    paymentMethod
  });
});

// @route   POST /api/v1/payments/webhook
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  // TODO: Verify PayMongo signature and update appointment status
  console.log('Received payment webhook');
  res.status(200).send('Webhook received');
});

// @route   GET /api/v1/payments/:appointmentId
router.get('/:appointmentId', async (req, res) => {
  // TODO: Implement actual MariaDB query for payment status
  res.status(200).json({
    message: 'Payment status (Mock)',
    status: 'paid'
  });
});

module.exports = router;
