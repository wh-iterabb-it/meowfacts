const { convert, logger, format } = require('sst');
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
  const user = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
  logger.info(`/ request from ${user}`);
  if ((req.query.count) && req.query.count.length > 0) {
    const count = convert.toNumber(req.query.count);
    if(count>=1 || count<=96) {
      return res.status(200).send({ data: facts.getMany(count) });
    } else {
      return res.status(500).send({error:`${count} is an invalid count, please enter a number from 1 to 96`});
    }
  } else {
    if ((req.query.id) && req.query.id.length > 0) {
      const id = convert.toNumber(req.query.id);
      if(id>=1 || id<=96) {
        return res.status(200).send({ data: [facts.getSingle(id)] });
      } else {
        return res.status(500).send({error:`${id} is an invalid id, please enter a number from 1 to 96`});
      }
    }
    else {
      return res.status(200).send({ data: [facts.getSingle()] });
    }
  }
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.get('/health', (req, res, next) => {
  requestsCount++;
  const user = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
  const time = process.uptime();
  const uptime = format.toDDHHMMSS(time + '');
  logger.info(`/health request from ${user}`);
  res.status(200).send({ data: {uptime: uptime, version: pkjson.version, requests: requestsCount} });
});

// heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
const server = app.listen(process.env.PORT || 5000, function () {
  const host = server.address().address;
  const port = server.address().port;

  logger.info(`app listening at http://${host}:${port}`);
});

module.exports = server;
