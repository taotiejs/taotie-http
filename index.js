const pino = require('pino-http');

const { startTime } = pino;

function taotieLogger(opts, stream) {
  const { customLogLevel } = opts;
  const useLevel = opts.useLevel || 'info';
  const logger = pino(opts, stream);

  function onResFinished(err) {
    this.removeListener('error', onResFinished);
    this.removeListener('finish', onResFinished);

    const { log } = this;
    const responseTime = Date.now() - this[startTime];
    const level = customLogLevel ? customLogLevel(this, err) : useLevel;

    const req = pino.stdSerializers.req(this.req);

    if (err || this.err || this.statusCode >= 500) {
      log[level]({
        res: this,
        err: err || this.err || new Error(`failed with status code ${this.statusCode}`),
        responseTime,
      }, `${req.method} ${req.url} ${this.statusCode} ${responseTime}ms`);
      return;
    }

    log[level]({
      res: this,
      responseTime,
    }, `${req.method} ${req.url} ${this.statusCode} ${responseTime}ms`);
  }

  function loggingMiddleware(req, res, next) {
    req.log = res.log = logger.child({ req });
    res[startTime] = res[startTime] || Date.now();
    if (!req.res) { req.res = res; }
    if (!res.req) { res.req = req; }

    res.on('finish', onResFinished);
    res.on('error', onResFinished);

    if (next) {
      next();
    }
  }

  loggingMiddleware.logger = logger;

  return loggingMiddleware;
}

Object.assign(taotieLogger, pino);

module.exports = taotieLogger;
