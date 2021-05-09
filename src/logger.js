const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
  level: 'info',
  json: false,
  transports: [
    new winston.transports.Console(),
  ],
});

logger.configure({
  level: 'verbose',
  transports: [
    new winston.transports.DailyRotateFile({
      filename: 'logs/logs-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '3d',
    }),
  ],
});

logger.log('info', 'start');

console.log = (...args) => logger.log('info', ...args);