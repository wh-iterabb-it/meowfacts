const logger = require('server-side-tools').logger;
const format = require('server-side-tools').format;
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const pkjson = require('../package.json');
const facts = require('./models/facts');

const app = express()

// adding helmet to enhance api security
app.use(helmet());

// using bodyParser to parse json bodies into js objects
app.use(bodyParser.json());

// request count resets on dynamo spin down, as intended
let requestsCount = 0;

/** set up cors middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, Origin, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

logger.info('turning on app...');

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.get('/', (req, res, next) => {
  requestsCount++;
  logger.info(`/ request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip}`);
  res.status(200).send({ data: [facts.getSingle()] });
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.get('/health', (req, res, next) => {
  requestsCount++;
  const time = process.uptime();
  const uptime = format.toDDHHMMSS(time + '');
  logger.info(`/health request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip}`);
  res.status(200).send({ data: {uptime: uptime, version: pkjson.version, requests: requestsCount} });
});

// heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
const server = app.listen(process.env.PORT || 5000, function () {
  const host = server.address().address;
  const port = server.address().port;

  logger.info(`app listening at http://${host}:${port}`);
});

module.exports = server;
