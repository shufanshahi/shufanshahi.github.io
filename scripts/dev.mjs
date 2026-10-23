/**
 * Local dev server that mirrors the deployed layout on a single port.
 *
 * The landing page and every folder in portfolios/ is its own Next.js app, so
 * each runs on a private port. This script listens on one public port and
 * forwards /<folder>/* to that portfolio and everything else to the landing
 * page, the same way GitHub Pages serves the merged build.
 */
import { spawn } from "node:child_process";
import { readdirSync, existsSync } from "node:fs";
import http from "node:http";
import net from "node:net";

const publicPort = Number(process.env.PORT ?? 3000);
const privateBase = publicPort + 1000;

const apps = [{ prefix: null, dir: ".", port: privateBase }];
if (existsSync("portfolios")) {
  readdirSync("portfolios", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .forEach((d, i) =>
      apps.push({ prefix: `/${d.name}`, dir: `portfolios/${d.name}`, port: privateBase + 1 + i }),
    );
}

const children = apps.map((app) => {
  const child = spawn("npx", ["next", "dev", "-p", String(app.port)], {
    cwd: app.dir,
    stdio: "inherit",
    env: { ...process.env, PORT: String(app.port) },
  });
  child.on("exit", (code) => process.exit(code ?? 0));
  return child;
});

const pick = (url = "/") =>
  apps.find((a) => a.prefix && (url === a.prefix || url.startsWith(`${a.prefix}/`) || url.startsWith(`${a.prefix}?`))) ??
  apps[0];

const server = http.createServer((req, res) => {
  const target = pick(req.url);
  const upstream = http.request(
    { host: "localhost", port: target.port, path: req.url, method: req.method, headers: req.headers },
    (up) => {
      res.writeHead(up.statusCode ?? 502, up.headers);
      up.pipe(res);
    },
  );
  upstream.on("error", () => {
    res.writeHead(502).end("Dev server is still starting, refresh in a moment.");
  });
  req.pipe(upstream);
});

// Forward websockets (hot reload) to the app that owns the path.
server.on("upgrade", (req, socket, head) => {
  const target = pick(req.url);
  const upstream = net.connect(target.port, "localhost", () => {
    const headers = Object.entries(req.headers).map(([k, v]) => `${k}: ${v}`);
    upstream.write(`${req.method} ${req.url} HTTP/1.1\r\n${headers.join("\r\n")}\r\n\r\n`);
    upstream.write(head);
    socket.pipe(upstream).pipe(socket);
  });
  upstream.on("error", () => socket.destroy());
  socket.on("error", () => upstream.destroy());
});

server.listen(publicPort, () => {
  console.log(`\nDev server: http://localhost:${publicPort}/`);
  apps.filter((a) => a.prefix).forEach((a) => console.log(`            http://localhost:${publicPort}${a.prefix}/`));
});

const stop = () => children.forEach((c) => c.kill());
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
