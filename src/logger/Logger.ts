import { ILogger } from './ILogger';
import { Logger as LogService } from 'tslog';


export class Logger implements ILogger {

	protected _logger: LogService;

	constructor(loggerName = 'logger_service') {
		this._logger = new LogService({ name: loggerName });

	}

	info(message: string, params: unknown = '') {
		this._logger.info(message, params)
	}

	warn(message: string, params: unknown = '') {
		this._logger.warn(message, params)
	}

	trace(message: string) {
		this._logger.trace(message)
	}

	debug(message: string) {
		this._logger.debug(message)
	}

	error(message: string) {
		this._logger.error(message)
	}

	fatal(error: Error) {
		this._logger.fatal(error)
	}

}