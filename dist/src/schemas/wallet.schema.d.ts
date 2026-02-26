import { z } from 'zod';
export declare const fundWalletSchema: z.ZodObject<{
    amount: z.ZodNumber;
    email: z.ZodString;
    reference: z.ZodString;
    category: z.ZodDefault<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const withdrawSchema: z.ZodObject<{
    amount: z.ZodNumber;
    reference: z.ZodString;
    category: z.ZodDefault<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const transferSchema: z.ZodObject<{
    receiver_user_id: z.ZodNumber;
    amount: z.ZodNumber;
    reference: z.ZodString;
    category: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FundWalletInput = z.infer<typeof fundWalletSchema>;
export type WithdrawInput = z.infer<typeof withdrawSchema>;
export type TransferInput = z.infer<typeof transferSchema>;
//# sourceMappingURL=wallet.schema.d.ts.map