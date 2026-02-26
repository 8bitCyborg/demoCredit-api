export declare class WalletService {
    private _credit;
    private _debit;
    private _validateTransaction;
    private _getWalletByEmail;
    private _validateWallet;
    getWalletById(user_id: number, trx?: any): Promise<any>;
    createWallet(userId: number, trx?: any): Promise<any>;
    fundWallet(body: any): Promise<{
        message: string;
        status: number;
    }>;
    withdrawFromWallet(body: any): Promise<{
        message: string;
        status: number;
    }>;
    transferFunds(body: any): Promise<{
        message: string;
        status: number;
    }>;
}
export declare const walletService: WalletService;
//# sourceMappingURL=wallet.service.d.ts.map