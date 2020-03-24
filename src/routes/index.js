const express = require('express');
const router = express.Router();

router.get('/api/keys', (req, res)=>{
  res.send("You have requested all the keys")
})

module.exports = router;