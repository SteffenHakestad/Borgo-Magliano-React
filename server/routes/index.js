const express = require('express');
const router = express.Router();

// Test route to check if server is running
router.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = router;
