import { IncomingMessage, ServerResponse } from 'http';
export declare class AuthController {
    signup: (req: IncomingMessage, res: ServerResponse) => Promise<{
        response: {
            user: any;
            token: string;
            status: number;
        };
    }>;
    login: (req: IncomingMessage, res: ServerResponse) => Promise<{
        response: {
            user: any;
            token: string;
            status: number;
        };
    }>;
}
export declare const authController: AuthController;
//# sourceMappingURL=auth.controller.d.ts.map