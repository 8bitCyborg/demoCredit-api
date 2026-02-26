import { IncomingMessage, ServerResponse } from 'http';
export declare class UserController {
    getProfile: (req: IncomingMessage, res: ServerResponse) => Promise<{
        message: string;
    }>;
}
export declare const userController: UserController;
//# sourceMappingURL=user.controller.d.ts.map