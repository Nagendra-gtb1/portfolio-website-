export const config = {
  runtime: "edge",
};

import server from "../dist/server/server.js";

export default async function handleRequest(request: Request) {
  return server.fetch(request, {}, {});
}
