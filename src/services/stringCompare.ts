// @ts-ignore
import stringSimilarity from "string-similarity";

export default async function (original: string, better: string){

    var similarity = stringSimilarity.compareTwoStrings(original, better);

    return similarity;

}