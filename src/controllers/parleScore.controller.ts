import { Request, Response, NextFunction } from "express";
import runCohereEngine from "../services/cohere.service"; 

/**
 * Handles the scoring system for parlé
 * @param req Request
 * @param res Response
 * @param next Next
 */
export default async function parleScore(req: Request, res: Response, next: NextFunction) {

    // Extract the audio file (flac) from the req body

    // Convert the audio file speech into text using google speech to text engine

    // Feed the text into co here
    const optimizedResult = await runCohereEngine();

    // Compare the results from req body and co here to score the system using the scoring service

    // Send the scores using res
    res.status(200).json({ optimizedResult: optimizedResult });
}