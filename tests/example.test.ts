'use strict';

import { expect } from 'chai';
import { mock } from 'ts-mockito';


import { Example } from '../dist/example';
import { ILogger } from '../dist/logger/ILogger';

const mockedLogger: ILogger = mock<ILogger>();


describe('Example class', () => {
	it('should create an instance using its constructor', () => {
		const example: Example = new Example(mockedLogger);
		expect(example, 'example should exist').to.exist; // tslint:disable-line:no-unused-expression
	});
	it('should return whatever is passed to exampleMethod()', () => {
		const example: Example = new Example(mockedLogger);
		const param = 'This is my param.';
		const returnValue: string = example.exampleMethod(param);
		expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	});
	it('should allow empty string to exampleMethod()', () => {
		const example: Example = new Example(mockedLogger);
		const param = '';
		const returnValue: string = example.exampleMethod(param);
		expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	});
});
