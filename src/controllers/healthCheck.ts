import { Request, Response, NextFunction } from "express";

export default function healthCheck(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ healthCheck: true });
}
