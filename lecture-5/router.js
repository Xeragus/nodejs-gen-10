const express = require('express');
const router = express.Router();

router.get('/heheh', (req, res) => {
  res.send('ova e GET na /ghehhe');
});

module.exports = router;