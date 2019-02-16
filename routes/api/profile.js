const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// description Tests profile routes
// access public

router.get('/test', (req, res) => {
  res.json({ msg: 'Profile works!' });
});

module.exports = router;
