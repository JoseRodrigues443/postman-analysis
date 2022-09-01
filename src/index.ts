import dotenv from "dotenv"

dotenv.config()

// import { options } from "./command";
import app from "./routes";

import { ILogger } from "./logger/ILogger";
import { Logger } from "./logger/Logger";

const port = 8080; // default port to listen


/**
 * @TODO Consider more advanced Dependency Injection options
 */
const logger: ILogger = new Logger();

logger.info("Starting...");

app.listen( port, () => {
    logger.info( `server started at http://localhost:${ port }` );
} );


logger.info("Ending...");