const { convert, logger, format } = require("sst");
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const pkjson = require("../package.json");
const facts = require("./models/facts");
const {
  invalidLanguageMiddleware,
  invalidCountMiddleware,
  invalidIDMiddleware,
} = require("./middleware");

const app = express();

// request count resets on dynamo spin down, as intended
let requestsCount = 0;

// adding helmet to enhance api security
app.use(helmet());

// using bodyParser to parse json bodies into js objects
app.use(bodyParser.json());

/** set up cors middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

/**
 * Sets up a log of the user
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.use((req, res, next) => {
  const user =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || req.ip;
  logger.info(`request from ${user}`);
  next();
});

// adding middleware to app to validate language and counts
app.use(invalidLanguageMiddleware);
app.use(invalidCountMiddleware);
app.use(invalidIDMiddleware);

// probably need to check the ID too...

logger.info("turning on app...");

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
app.get("/", (req, res) => {
  requestsCount++;
  const { lang = null, count, id } = req.query;

  try {
    // Gestione mutualmente esclusiva dei parametri
    if (count && id) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Cannot specify both count and id parameters'
      });
    }

    let data;
    if (count) {
      data = facts.getMany(convert.toNumber(count), lang);
    } else {
      data = [facts.getSingle(id ? convert.toNumber(id) : null, lang)];
    }

    return res.status(200).json({ data });
    
  } catch (error) {
    return res.status(500).json({ 
      error: 'Error in fact retrieval',
      message: error.message 
    });
  }
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
app.get("/options", (req, res) => {
  res.status(200).send({ lang: facts.getLanguages() });
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
app.get("/health", (req, res) => {
  requestsCount++;
  const time = process.uptime();
  const uptime = format.toDDHHMMSS(time + "");
  res.status(200).send({
    data: {
      uptime: uptime,
      version: pkjson.version,
      requests: requestsCount,
    },
  });
});

// heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
const server = app.listen(process.env.PORT || 5000, function () {
  const host = server.address().address;
  const port = server.address().port;

  logger.info(`app listening at http://${host}:${port}`);
});

module.exports = server;
