const express = require('express');
const router = express.Router();

// Mock Admin Routes

// @route   GET /api/v1/admin/verifications
// @desc    List all pending engineer verifications
router.get('/verifications', async (req, res) => {
  // TODO: Implement actual MariaDB query
  res.status(200).json({
    message: 'Pending verifications (Mock)',
    data: [
      { id: 'eng_1', name: 'Engr. John Doe', prcNumber: '0123456', expiryDate: '2028-12-31' }
    ]
  });
});

// @route   PUT /api/v1/admin/verifications/:id
// @desc    Approve or reject an engineer's verification
router.put('/verifications/:id', async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  // TODO: Update engineer status in MariaDB
  res.status(200).json({ message: `Verification for engineer ${id} updated to ${status} (Mock)` });
});

// @route   GET /api/v1/admin/reports
// @desc    List all user-filed reports/complaints
router.get('/reports', async (req, res) => {
  // TODO: Implement actual MariaDB query
  res.status(200).json({
    message: 'User reports (Mock)',
    data: []
  });
});

module.exports = router;
