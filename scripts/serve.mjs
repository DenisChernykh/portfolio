import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = normalize(join(fileURLToPath(new URL("..", import.meta.url))));
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 5173);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"]
]);

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${host}:${port}`);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const safePath = normalize(join(root, pathname));

    if (!safePath.startsWith(root)) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    const body = await readFile(safePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes.get(extname(safePath)) || "application/octet-stream"
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Portfolio site running at http://${host}:${port}/`);
});
