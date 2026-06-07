export const config = {
  runtime: "nodejs",
};

let server: any;

async function getServer() {
  if (server) return server;
  const mod = await import("../dist/server/server.js");
  server = mod.default ?? mod;
  return server;
}

export default async function handleRequest(request: Request) {
  const serverModule = await getServer();
  return serverModule.fetch(request, {}, {});
}
