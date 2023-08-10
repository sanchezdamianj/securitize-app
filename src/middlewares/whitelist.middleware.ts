import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class WhitelistMiddleware implements NestMiddleware {
  private readonly allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1', 'http://localhost:3000'];

  use(req: Request, res: Response, next: NextFunction) {
    const origin = req.headers.origin as string;
    if (this.allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    next();
  }
}
