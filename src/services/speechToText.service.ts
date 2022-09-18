import speech from "@google-cloud/speech";
import fs from "fs";
import path from "path";

export default async function main() {
  const client = new speech.SpeechClient();

  // The path to the remote LINEAR16 file
//   const audioFile = fs.readFileSync(
//     "/Users/nullpointer/code/hackathons/parle-backend/src/resources/test.raw"
//   );
//   const audioBytes = audioFile.toString("base64");

//   console.log(audioBytes);

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
 
  const request: any = {
    config: {
      languageCode: "en-US",
      enableWordTimeOffsets: true,
    },
    audio: {
      uri: "gs://cloud-samples-tests/speech/brooklyn.flac",
    },
  };

  // Detects speech in the audio file
  const [response]: any = await client.recognize(request);
  const transcription = response.results
    .map((result: any) => result.alternatives[0].transcript)
    .join("\n");
  console.log(`Transcription: ${transcription}`);
}
