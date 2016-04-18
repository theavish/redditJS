const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const devDir = path.join(__dirname, '..', 'client', 'dev');
const distDir = path.join(__dirname, '..', 'client', 'dist');

const apiRouter = require('./routes/router.js')



if (node.env.devFlag) {
  app.use('/', express.static(devDir));
  app.use(morgan('dev'));
} else {
  app.use('/', express.static(distDir));
}

app.use('/api', apiRouter);

app.listen(port, () => { console.log('listening on', port) });