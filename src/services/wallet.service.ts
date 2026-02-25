import db from "../database/db.js";

export class WalletService {
  async createWallet(userId: number, trx?: any) {
    const query = trx || db;
    return await query('wallets').insert({
      user_id: userId,
      balance: 0,
      is_disabled: false,
    });
  };

  async getBalance(userId: string) {
    return { userId, balance: 1000, currency: 'NGN' };
  }

  async fundAccount(userId: string, amount: number) {
    return { userId, newBalance: 1000 + amount, status: 'success' };
  }

  async transfer(fromUserId: string, toUserId: string, amount: number) {
    return { fromUserId, toUserId, amount, status: 'success', transactionId: 'tx_' + Math.random().toString(36).substr(2, 9) };
  }

  async withdraw(userId: string, amount: number) {
    return { userId, amount, status: 'success', remainingBalance: 1000 - amount };
  }
}

export const walletService = new WalletService();
