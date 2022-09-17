import { Request, Response, NextFunction } from "express";
import runCohere from "../services/parleScore"; 

export default async function parleScore(req: Request, res: Response, next: NextFunction) {
    await runCohere();
    res.status(200).json({ parleScore: 100 });
}