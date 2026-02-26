import { IncomingMessage, ServerResponse } from 'http';
export type AsyncHandler = (req: IncomingMessage, res: ServerResponse) => Promise<any>;
/**
 * Wraps an async route handler to provide consistent try/catch and response handling.
 * If the handler returns data and hasn't ended the response, it will be sent as JSON with 200 OK.
 * If an error is thrown, it will be sent as JSON with the error's status or 500.
 */
export declare const asyncHandler: (handler: AsyncHandler) => (req: IncomingMessage, res: ServerResponse) => Promise<void>;
//# sourceMappingURL=async-handler.d.ts.map