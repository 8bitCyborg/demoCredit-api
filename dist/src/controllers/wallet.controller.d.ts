import { IncomingMessage, ServerResponse } from 'http';
export declare class WalletController {
    fundWallet: (req: IncomingMessage, res: ServerResponse) => Promise<{
        message: string;
        status: number;
    }>;
    withdrawFromWallet: (req: IncomingMessage, res: ServerResponse) => Promise<{
        message: string;
        status: number;
    }>;
    transfer: (req: IncomingMessage, res: ServerResponse) => Promise<{
        message: string;
        status: number;
    }>;
}
export declare const walletController: WalletController;
//# sourceMappingURL=wallet.controller.d.ts.map