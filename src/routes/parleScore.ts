import express from "express";
import parleScoreController from "../controllers/parleScore";

const router = express.Router();

/* GET home page. */
router.post("/parle-score", async (req, res, next) => {
  await parleScoreController(req, res, next);
});

export default router;
