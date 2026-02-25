import { IncomingMessage, ServerResponse } from 'http';
import { userService } from '../services/user.service.js';

export class UserController {
  async getProfile(req: IncomingMessage, res: ServerResponse) {

  }
}

export const userController = new UserController();
