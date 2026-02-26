import { IncomingMessage } from 'http';
import type { TokenPayload } from './jwt.util.js';
export interface AuthenticatedRequest extends IncomingMessage {
    user?: TokenPayload;
}
export declare const jwtGuard: (req: AuthenticatedRequest) => Promise<TokenPayload>;
export declare const getUserIdFromRequest: (req: IncomingMessage) => number;
//# sourceMappingURL=jwtGuard.d.ts.map