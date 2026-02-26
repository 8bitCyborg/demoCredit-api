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
  amount: z.number().positive('Amount must be positive').max(10000000, 'Single transfer limit is 100,000'),
  reference: z.string().min(1, 'Reference is required'),
  category: z.string(),
  description: z.string().optional(),
});

export type FundWalletInput = z.infer<typeof fundWalletSchema>;
export type WithdrawInput = z.infer<typeof withdrawSchema>;
export type TransferInput = z.infer<typeof transferSchema>;