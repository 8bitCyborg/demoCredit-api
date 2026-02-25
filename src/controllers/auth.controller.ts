import { IncomingMessage, ServerResponse } from 'http';
import { authService } from '../services/auth.service.js';
import { getRequestBody } from '../utils/body-parser.js';
import { signupSchema, loginSchema } from '../schemas/auth.schema.js';

export class AuthController {
  signup = async (req: IncomingMessage, res: ServerResponse) => {
    const body = await getRequestBody(req);
    const validation = signupSchema.safeParse(body);
    if (!validation.success) {
      throw {
        status: 400,
        message: 'Validation failed',
        errors: validation.error.format()
      };
    }

    const response = await authService.signup(validation.data);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return { response };
  };

  login = async (req: IncomingMessage, res: ServerResponse) => {
    const body = await getRequestBody(req);
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      throw {
        status: 400,
        message: 'Validation failed',
        errors: validation.error.format()
      };
    }

    const response = await authService.login(validation.data);
    return { response };
  };
};

export const authController = new AuthController();
