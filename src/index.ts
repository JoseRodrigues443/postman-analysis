import dotenv from "dotenv"

dotenv.config()

import { options } from "./command";

import { Example } from "./example";
import { ILogger } from "./logger/ILogger";
import { Logger } from "./logger/Logger";

/**
 * @TODO Consider more advanced Dependency Injection options
 */
const logger: ILogger = new Logger();

logger.info("Starting...");

const example: Example = new Example(logger);
const param = options.name ?? 'This is my param.';
logger.info(`Example output: ${example.exampleMethod(param)}`)

logger.info("Ending...");