const express = require('express');
const router = express.Router();

// Mock Review Routes

// @route   POST /api/v1/reviews
// @desc    Submit a review for an engineer after a completed appointment
router.post('/', async (req, res) => {
  const { appointmentId, clientId, engineerId, rating, comment } = req.body;
  // TODO: Implement actual MariaDB insertion and update engineer average rating
  res.status(201).json({
    message: 'Review submitted successfully (Mock)',
    data: {
      id: 'rev_123',
      appointmentId,
      clientId,
      engineerId,
      rating,
      comment,
      created_at: new Date()
    }
  });
});

// @route   GET /api/v1/reviews/engineer/:id
// @desc    Get all reviews for a specific engineer
router.get('/engineer/:id', async (req, res) => {
  const { id } = req.params;
  // TODO: Implement actual MariaDB query
  res.status(200).json({
    message: `Reviews for engineer ${id} (Mock)`,
    data: [
      { id: 'rev_1', clientName: 'Juan Dela Cruz', rating: 5, comment: 'Excellent structural analysis!', date: '2026-04-15' },
      { id: 'rev_2', clientName: 'Maria Santos', rating: 4, comment: 'Very professional and detailed report.', date: '2026-03-20' }
    ]
  });
});

// @route   POST /api/v1/reviews/report
// @desc    Report a review for moderation
router.post('/report', async (req, res) => {
  const { reviewId, reason } = req.body;
  res.status(200).json({ message: 'Review reported for moderation (Mock)' });
});

module.exports = router;
