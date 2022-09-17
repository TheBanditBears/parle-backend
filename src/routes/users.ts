import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({hello: "hello"});
});

export default router;
