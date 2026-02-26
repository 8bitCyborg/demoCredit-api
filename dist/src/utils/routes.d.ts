import { IncomingMessage, ServerResponse } from 'http';
export interface Route {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    handler: (req: IncomingMessage, res: ServerResponse) => Promise<any>;
    isPublic?: boolean;
}
export declare const routes: Route[];
export declare const routeMap: Map<string, Route>;
//# sourceMappingURL=routes.d.ts.map