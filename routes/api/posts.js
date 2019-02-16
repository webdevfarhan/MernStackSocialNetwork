const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// description Tests post routes
// access public

router.get('/test', (req, res) => {
  res.json({ msg: 'Posts works!' });
});

module.exports = router;
