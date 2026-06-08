import type { IncomingMessage, ServerResponse } from "http";

type ServerModule = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response>;
};

let server: ServerModule | undefined;

async function getServer() {
  if (server) return server;
  const serverPath = new URL("../dist/server/server.js", import.meta.url).href;
  const mod = await import(serverPath);
  server = (mod.default ?? mod) as ServerModule;
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
    body:
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : (req as unknown as BodyInit),
  });

  const response = await serverModule.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value: string, name: string) => {
    res.setHeader(name, value);
  });

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}
