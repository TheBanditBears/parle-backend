import { Request, Response, NextFunction } from "express";

/**
 * Default Health Check Controller that maps to /
 * @param req Request
 * @param res Response
 * @param next Next
 */
export default function healthCheck(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ healthCheck: true });
}
