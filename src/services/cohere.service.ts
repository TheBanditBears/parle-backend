import cohere from "cohere-ai";


export default async function runCohereEngine(prompt: String) {
    cohere.init(process.env.CO_HERE_API_KEY);

    const response = await cohere.generate({ 
        model: 'large',
        prompt: `--\n${prompt}`,
        max_tokens: 40, 
        temperature: 0.5, 
        k: 0, 
        p: 1, 
        frequency_penalty: 0, 
        presence_penalty: 0, 
        stop_sequences: ["--"], 
        return_likelihoods: 'NONE' 
      }); 
    // const response = await cohere.generate({ prompt: 'Once upon a time in a magical land called' } as any );
    console.log(`Prediction: ${JSON.stringify(response.body.generations[0])}`);

    return {optimizedPrompt: response.body.generations[0].text};
}


