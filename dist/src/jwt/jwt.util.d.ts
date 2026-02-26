export interface TokenPayload {
    userId: number;
    email: string;
}
export declare const generateToken: (payload: TokenPayload) => string;
export declare const verifyToken: (token: string) => TokenPayload;
export declare const getUserIdFromToken: (token: string) => number;
//# sourceMappingURL=jwt.util.d.ts.map