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

//some other functions we might use (change function name later)
// Route for function 1 
router.get('/function1', (req, res) => {
    res.send('Function 1 executed');
});

// Route for function 2 
router.get('/function2', (req, res) => {
    res.send('Function 2 executed');
});

module.exports = router;
