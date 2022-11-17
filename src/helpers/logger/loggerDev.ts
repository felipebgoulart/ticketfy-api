import { createLogger, Logger, format, transports } from 'winston';
import { LoggerLevels } from '../../common/constants/loggerLevels';

export function loggerDev(): Logger {
  const { combine, timestamp, errors, printf } = format;

  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });
  
  return createLogger({
    level: LoggerLevels.info,
    format: combine(
      format.colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [ new transports.Console({ level: LoggerLevels.debug }) ]
  });
}
