const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  json: false,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

console.log = () => logger.info.apply(logger, arguments);
console.error = () => logger.error.apply(logger, arguments);
console.info = () => logger.info.apply(logger, arguments);