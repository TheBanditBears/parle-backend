import express from "express";
import parleScoreController from "../controllers/parleScore";

const router = express.Router();

/* GET home page. */
router.post('/parle-score', parleScoreController);

export default router;
