export declare class UserService {
    create(body: any): Promise<any>;
    getUserById(id: number, trx?: any): Promise<any>;
    getUserByEmail(email: string, withPassword?: boolean): Promise<any>;
}
export declare const userService: UserService;
//# sourceMappingURL=user.service.d.ts.map