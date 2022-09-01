'use strict';

import { expect } from 'chai';

import { Logger } from '../dist/logger/Logger';

const LOGGER_NAME = 'logger_test'

describe('Logger class', () => {
	it('should create an instance using its constructor', () => {
		const logger: Logger = new Logger(LOGGER_NAME);
		expect(logger, 'Logger should exist').to.exist; // tslint:disable-line:no-unused-expression
	});
});
