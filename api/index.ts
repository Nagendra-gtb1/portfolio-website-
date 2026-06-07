import type { IncomingMessage, ServerResponse } from "http";

let server: any;

async function getServer() {
  if (server) return server;
  const mod = await import("../dist/server/server.js");
  server = mod.default ?? mod;
  return server;
}

function getRequestUrl(req: IncomingMessage) {
  const host = req.headers.host ?? "localhost";
  const protoHeader = req.headers["x-forwarded-proto"];
  const protocol = typeof protoHeader === "string" ? protoHeader.split(",")[0] : "https";
  return `${protocol}://${host}${req.url ?? "/"}`;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const serverModule = await getServer();
  const request = new Request(getRequestUrl(req), {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });

  const response = await serverModule.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, name) => {
    res.setHeader(name, value);
  });

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}
