export const config = {
  runtime: "edge",
};

declare module "../dist/server/server.js" {
  const server: any;
  export default server;
}

import server from "../dist/server/server.js";

export default async function handleRequest(request: Request) {
  return server.fetch(request, {}, {});
}
