import { IncomingMessage } from 'http';
import cookieParser from 'cookie-parser';
import type { TokenPayload } from './jwt.util.js';
import { verifyToken } from './jwt.util.js';

export interface AuthenticatedRequest extends IncomingMessage {
  user?: TokenPayload;
  cookies?: Record<string, string>;
}

const parseCookies = cookieParser();

export const jwtGuard = async (req: AuthenticatedRequest) => {
  let token: string | undefined;

  const clientType = req.headers['x-client-type'];

  if (clientType === 'demoCredit-webapp') {
    // Webapp ONLY uses cookies
    await new Promise<void>((resolve) => {
      parseCookies(req as any, {} as any, () => resolve());
    });
    token = req.cookies?.['token'];
  } else {
    // Other clients ONLY use Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
  }

  if (!token) {
    throw { status: 401, message: 'Authentication token missing or invalid' };
  }

  const decoded = verifyToken(token);
  req.user = decoded;
  return decoded;
};


export const getUserIdFromRequest = (req: IncomingMessage): number => { // use this to get user id to prevent malicious users from spoofing user ids.
  const user = (req as AuthenticatedRequest).user;
  if (!user || !user.userId) {
    throw { status: 401, message: 'User not authenticated' };
  }
  return user.userId;
};
