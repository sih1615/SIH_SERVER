//routes for functions for dashboard (function logic to be coded later)
const express = require('express');
const router = express.Router();

// Route for dashboard main data
router.get('/', (req, res) => {
    res.send('Dashboard data');
});

// Route for progress details
router.get('/progress-details', (req, res) => {
    res.send('Progress details data');
});

// Route for streak update
router.post('/streak-update', (req, res) => {
    // Handle streak update logic here
    res.send('Streak updated');
});

module.exports = router;
