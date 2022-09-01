'use strict';

import { ILogger } from './logger/ILogger';

export class Example {

	private _logger: ILogger;

	constructor(logger: ILogger) {
		this._logger = logger;
	}

	public exampleMethod(param: string): string {
		this._logger.debug('Received: ' + param);
		return param;
	}
}
