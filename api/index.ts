import type { IncomingMessage, ServerResponse } from "http";

type ServerModule = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response>;
};

let server: ServerModule | undefined;

async function getServer() {
  if (server) return server;
  const serverPath = new URL("../dist/client/server/server.js", import.meta.url).href;
  try {
    const mod = await import(serverPath);
    server = (mod.default ?? mod) as ServerModule;
    return server;
  } catch (error) {
    throw new Error(`Failed to import server bundle from ${serverPath}: ${error}`);
  }
}

function getRequestUrl(req: IncomingMessage) {
  const host = req.headers.host ?? "localhost";
  const protoHeader = req.headers["x-forwarded-proto"];
  const protocol = typeof protoHeader === "string" ? protoHeader.split(",")[0] : "https";
  return `${protocol}://${host}${req.url ?? "/"}`;
}

function normalizeHeaders(headers: IncomingMessage["headers"]): HeadersInit {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) continue;
    normalized[key] = Array.isArray(value) ? value.join(",") : value;
  }

  return normalized;
}

async function readRequestBody(req: IncomingMessage): Promise<Uint8Array> {
  const chunks: Uint8Array[] = [];

  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const serverModule = await getServer();
  const request = new Request(getRequestUrl(req), {
    method: req.method ?? "GET",
    headers: normalizeHeaders(req.headers),
    body:
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : await readRequestBody(req),
  });

  const response = await serverModule.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value: string, name: string) => {
    res.setHeader(name, value);
  });

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}
