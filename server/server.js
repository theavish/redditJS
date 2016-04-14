const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const apiRouter = require('./routes/router.js')

app.use(morgan('dev'));

app.use('/api', apiRouter);
app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(port, () => { console.log('listening on', port) });