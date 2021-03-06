import winston, { format } from 'winston'
import winstonTimestampColorize from 'winston-timestamp-colorize'
import { log, environments } from './config'
import { logging } from './messages'

winston.format.colorize().addColors(log.colors)

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === environments.production ? log.levels.error.value : log.levels.debug.value,
      format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.simple(),
        winstonTimestampColorize({ color: 'green' }),
        format.printf(msg => `${msg.level}: ${msg.message} - ${msg.timestamp}`),
      ),
    }),
    new winston.transports.File({
      filename: log.filename,
      level: log.levels.debug.value,
      format: format.combine(
        format.timestamp(),
        format.simple(),
        format.printf(msg => `${msg.level}: ${msg.message} - ${msg.timestamp}`),
      ),
    }),
  ],
}

const logger = winston.createLogger(options)

if (process.env.NODE_ENV !== environments.production) {
  logger.info(logging.initialised(process.env.LOG_LEVEL))
}

export default logger
