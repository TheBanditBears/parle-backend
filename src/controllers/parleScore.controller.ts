import { Request, Response, NextFunction } from "express";
import runCohereEngine from "../services/cohere.service"; 
import main from "../services/speechToText.service";
import stringCompare from "../services/stringCompare";

/**
 * Handles the scoring system for parlé
 * @param req Request
 * @param res Response
 * @param next Next
 */
export default async function parleScore(req: Request, res: Response, next: NextFunction) {

    // Extract the audio file (flac) from the req body

    // Convert the audio file speech into text using google speech to text engine
    const originalText = main(req.body);

    // Feed the text into co here
    const result = await runCohereEngine(await originalText);
    console.log(result.optimizedPrompt);
    // Compare the results from req body and co here to score the system using the scoring service
    const score = await stringCompare(await originalText, result.optimizedPrompt);
    // Send the scores using res
    res.status(200).json(score);
}