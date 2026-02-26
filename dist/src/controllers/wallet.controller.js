import { IncomingMessage, ServerResponse } from 'http';
import { walletService } from '../services/wallet.service.js';
import { getRequestBody } from '../utils/body-parser.js';
import { getUserIdFromRequest } from '../jwt/jwtGuard.js';
import { fundWalletSchema, withdrawSchema, transferSchema } from '../schemas/wallet.schema.js';
export class WalletController {
    fundWallet = async (req, res) => {
        const body = await getRequestBody(req);
        const validation = fundWalletSchema.safeParse(body);
        if (!validation.success) {
            throw { status: 400, message: 'Validation failed', errors: validation.error.format() };
        }
        ;
        const result = await walletService.fundWallet(validation.data);
        return result;
    };
    withdrawFromWallet = async (req, res) => {
        const body = await getRequestBody(req);
        const validation = withdrawSchema.safeParse(body);
        if (!validation.success) {
            throw { status: 400, message: 'Validation failed', errors: validation.error.format() };
        }
        ;
        const result = await walletService.withdrawFromWallet({
            user_id: getUserIdFromRequest(req),
            ...validation.data
        });
        return result;
    };
    transfer = async (req, res) => {
        const body = await getRequestBody(req);
        const validation = transferSchema.safeParse(body);
        if (!validation.success) {
            throw { status: 400, message: 'Validation failed', errors: validation.error.format() };
        }
        ;
        const sender_user_id = getUserIdFromRequest(req);
        if (sender_user_id === validation.data.receiver_user_id)
            throw { status: 400, message: 'You cannot send money to yourself.' };
        const result = await walletService.transferFunds({
            sender_user_id,
            ...validation.data
        });
        return result;
    };
}
;
export const walletController = new WalletController();
//# sourceMappingURL=wallet.controller.js.map