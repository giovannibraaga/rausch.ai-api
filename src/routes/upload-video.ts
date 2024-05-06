import { FastifyInstance } from "fastify";
import {} from '@fastify/multipart'

export async function uploadVideoRoute(app: FastifyInstance) {
  app.post("/videos", async () => {});
}
