import cohere from "cohere-ai";


export default async function runCohere() {
    cohere.init(process.env.CO_HERE_API_KEY);
    console.log("Hello");

    const response = await cohere.generate({ 
        model: 'large',
        prompt: '--\nIncorrect transcription: I got got charged interest on ly credit card but I paid my pull balance one day due date. I not missed a pavement year yet. Man you reverse the interest charge?\n\nCorrect transcription:', 
        max_tokens: 40, 
        temperature: 0.5, 
        k: 0, 
        p: 1, 
        frequency_penalty: 0, 
        presence_penalty: 0, 
        stop_sequences: ["--"], 
        return_likelihoods: 'NONE' 
      }); 
      console.log(`Prediction: ${response.body.generations[0].text}`);

    // const response = await cohere.generate({ prompt: 'Once upon a time in a magical land called' } as any );
    console.log(`Prediction: ${JSON.stringify(response.body.generations)}`);
}


