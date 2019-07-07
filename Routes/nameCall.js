var express = require('express')
var router = express.Router()



// middleware that is specific to this router
router.get('/', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });

module.exports = router