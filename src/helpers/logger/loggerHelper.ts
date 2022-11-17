import { Logger} from 'winston';
import { loggerDev } from './loggerDev';
import { loggerProd } from './loggerProd';

export function loggerHelper(): Logger {
  if (process.env.ENVIRONMENT == 'production') {
    return loggerProd();
  } else {
    return loggerDev();
  }
}
