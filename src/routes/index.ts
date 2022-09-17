import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', (req: any, res: any, next: any) => {
  res.json({ title: 'Express' });
});

export default router;
