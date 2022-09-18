import express from "express";
import parleScoreController from "../controllers/parleScore.controller";

const router = express.Router();

router.post("/parle-score", async (req, res, next) => {
  await parleScoreController(req, res, next);
});

export default router;
