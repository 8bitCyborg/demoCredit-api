import { IncomingMessage } from 'http';
import { verifyToken } from './jwt.util.js';
export const jwtGuard = async (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw { status: 401, message: 'Authorization header missing or invalid' };
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        throw { status: 401, message: 'Bearer token missing' };
    }
    const decoded = verifyToken(token);
    req.user = decoded;
    return decoded;
};
export const getUserIdFromRequest = (req) => {
    const user = req.user;
    if (!user || !user.userId) {
        throw { status: 401, message: 'User not authenticated' };
    }
    return user.userId;
};
//# sourceMappingURL=jwtGuard.js.map