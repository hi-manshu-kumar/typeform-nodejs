const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

module.exports = router;
