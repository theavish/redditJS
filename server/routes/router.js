const router = require('express').Router();
const jsonparser = require('body-parser').json();
const appBundle = require('../bundle.js');
console.log('***********', appBundle)

router.get('/test', (req, res) => { res.send('success') });

// router.get('/bundle', (req, res) => { res.send(appBundle) });

module.exports = router;