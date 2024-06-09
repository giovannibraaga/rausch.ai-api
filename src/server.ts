import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";
import dotenv from "dotenv";

dotenv.config();

const app = fastify();

app.register(fastifyCors, {
  origin: "https://rauschai.vercel.app",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

// Ensure PORT is a string and provide a default value if not set
const port = parseInt(process.env.PORT || '4000', 10);

const start = async () => {
  try {
    await app.listen({ port, host: '0.0.0.0' });
    app.log.info(`Server listening on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
