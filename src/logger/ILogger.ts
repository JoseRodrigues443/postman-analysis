export interface ILogger {
    info(message: string, params?: unknown): void;
    warn(message: string, params?: unknown): void;
    trace(message: string): void;
    debug(message: string): void;
    error(message: string): void;
    fatal(error: Error): void;
}

