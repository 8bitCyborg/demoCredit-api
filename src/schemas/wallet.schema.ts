import { z } from 'zod';

export const fundWalletSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  email: z.string().email('Invalid email address'),
  reference: z.string().min(1, 'Reference is required'),
  category: z.string().default('funding'),
  description: z.string().optional(),
});

export const withdrawSchema = z.object({
  amount: z.number().positive('Amount must be positive').max(10000000, 'Single withdraw limit is 100,000'),
  reference: z.string().min(1, 'Reference is required'),
  category: z.string().default('withdrawal'),
  description: z.string().optional(),
  counterparty_id: z.string().min(1, 'Destination account number is required'),
  destination_bank_code: z.string().min(1, 'Destination bank code is required'),
  counterparty_name: z.string().min(1, 'Destination account name is required'),
});

export const transferSchema = z.object({
  receiver_user_id: z.number().int().positive('Invalid receiver user ID'),
  receiver_name: z.string().min(1, 'Receiver name is required'),
  sender_name: z.string().min(1, 'Sender name is required'),
  amount: z.number().positive('Amount must be positive').max(10000000, 'Single transfer limit is 100,000'),
  reference: z.string().min(1, 'Reference is required'),
  category: z.string(),
  description: z.string().optional(),
});

export type FundWalletInput = z.infer<typeof fundWalletSchema>;
export type WithdrawInput = z.infer<typeof withdrawSchema>;
export type TransferInput = z.infer<typeof transferSchema>;

export interface LedgerEntryInput {
  wallet_id: number;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  status: 'pending' | 'success' | 'failed';
  reference: string;
  description?: string | undefined;
}

export interface CreditDebitInput {
  amount: number;
  category: string;
  reference: string;
  description?: string | undefined;
  counterparty_name: string;
  counterparty_id: number | string;
}

export interface Wallet {
  id: number;
  user_id: number;
  balance: number;
  is_disabled: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export type WithdrawActionInput = WithdrawInput & { user_id: number };
export type TransferActionInput = TransferInput & { sender_user_id: number };