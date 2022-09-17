import express from "express";
import healthCheckController from "../controllers/healthCheck";

const router = express.Router();

/* GET home page. */
router.get('/', healthCheckController);

export default router;
