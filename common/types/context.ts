import { Request, Response } from "express";

/**
 * Typing for graphQl auth context management
 */
export interface AuthContext {
  token?: string | string[];
  uid?: string;
}

/**
 * Typing for graphQl context
 */
export interface Context extends AuthContext {
  req: Request;
  res: Response;
}
