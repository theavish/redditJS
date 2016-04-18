const router = require('express').Router();
const jsonparser = require('body-parser').json();

router.get('/test', (req, res) => { res.send('success') });

module.exports = router;