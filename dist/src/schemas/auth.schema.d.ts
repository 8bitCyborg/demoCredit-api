import { z } from 'zod';
export declare const signupSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    bvn: z.ZodString;
}, z.core.$strip>;
export type SignupInput = z.infer<typeof signupSchema>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginInput = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.schema.d.ts.map