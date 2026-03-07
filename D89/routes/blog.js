const express = require('express')
const router = express.Router()

// define the blog route
router.get('/', (req, res) => {
  res.send('Hey! This is Blog Page.');
})

module.exports = router