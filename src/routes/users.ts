import express from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', (req: any, res: any, next: any) => {
  res.json({hello: "hello"});
});

export default router;
