const express = require('express');
let router = express.Router();
const getSign = require('../play');
router.get('/getsign', async (req, res) => {
  const sign = await getSign();
  res.send(JSON.parse(sign));
});

module.exports = router;
