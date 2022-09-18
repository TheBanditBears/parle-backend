import * as http from "http";
import express from "express";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/healthCheck";
import parleScore from "./routes/parleScore";
import cors from "cors";

import speech from "@google-cloud/speech";
import fs from "fs";
import path from "path";

/**
 * Google Text to Speech
 */

// async function main() {
//   const client = new speech.SpeechClient();

//   // The path to the remote LINEAR16 file
//   const gcsUri = path.resolve(__dirname, '/Users/nullpointer/code/hackathons/parle-backend/');
//   const audioFile = fs.readFileSync('/Users/nullpointer/code/hackathons/parle-backend/src/resources/test.raw');
//   const audioBytes = audioFile.toString('base64');

//   console.log(audioBytes);

//   // The audio file's encoding, sample rate in hertz, and BCP-47 language code
//   const audio = {
//     content: audioBytes,
//   };

//   const config = {
//     encoding: 'LINEAR16',
//     sampleRateHertz: 16000,
//     languageCode: 'en-US',
//   };
//   const request: any = {
//     audio: audio,
//     config: config,
//   };

//   // Detects speech in the audio file
//   const [response]: any = await client.recognize(request);
//   const transcription = response.results
//     .map((result: any) => result.alternatives[0].transcript)
//     .join('\n');
//   console.log(`Transcription: ${transcription}`);
// }

// (async () => {
//   await main();
// })()

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);
app.use(parleScore);

/**
 * Get port from environment and store in Express.
 */

const serverPort = normalizePort(process.env.PORT || '8080');
app.set('port', serverPort);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(serverPort);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof serverPort === 'string'
    ? 'Pipe ' + serverPort
    : 'Port ' + serverPort;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

