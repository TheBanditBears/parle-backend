import { Request, Response, NextFunction } from "express";

export default function parleScore(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ parleScore: 100 });
}