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

// 请求计数器
let requestsCount = 0;

// 中间件配置
app.use(helmet());
app.use(bodyParser.json());
app.use(corsMiddleware);
app.use(logUserMiddleware);
app.use(invalidLanguageMiddleware);
app.use(invalidCountMiddleware);
app.use(invalidIDMiddleware);

logger.info("turning on app...");

// 路由配置
app.get("/", handleGetRoot);
app.get("/options", handleGetOptions);
app.get("/health", handleGetHealth);

// 启动服务器
const server = app.listen(process.env.PORT || 5000, function () {
  const host = server.address().address;
  const port = server.address().port;
  logger.info(`app listening at http://${host}:${port}`);
});

module.exports = server;

// 中间件实现
function corsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET");
  next();
}

function logUserMiddleware(req, res, next) {
  const user = req.headers["x-forwarded-for"] || req.socket.remoteAddress || req.ip;
  logger.info(`request from ${user}`);
  next();
}

// 路由处理函数
function handleGetRoot(req, res) {
  requestsCount++;
  const lang = req.query.lang || null;

  if (req.query.count) {
    const count = convert.toNumber(`${req.query.count}`);
    return res.status(200).send({ data: facts.getMany(count, lang) });
  }

  if (req.query.id) {
    const id = convert.toNumber(`${req.query.id}`);
    return res.status(200).send({ data: [facts.getSingle(id, lang)] });
  }

  return res.status(200).send({ data: [facts.getSingle(null, lang)] });
}

function handleGetOptions(req, res) {
  res.status(200).send({ lang: facts.getLanguages() });
}

function handleGetHealth(req, res) {
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
}
