var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/year' , (req,res) => {
  res.json({ date : new Date().getFullYear() });
});

module.exports = router;
