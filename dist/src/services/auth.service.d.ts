export declare class AuthService {
    signup(body: any): Promise<{
        user: any;
        token: string;
        status: number;
    }>;
    login(body: any): Promise<{
        user: any;
        token: string;
        status: number;
    }>;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map