const winston = require('winston');

const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    transports : [
        new winston.transports.File({ filename: 'logs/all.logs'}),
        new winston.transports.Console()
    ]
});

logger.info('Hello World!');
logger.warn('Problem');