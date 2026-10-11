import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pathToFileURL } from "node:url";
import path from "node:path";

function talkdidApiPlugin() {
  const apiRoot = path.resolve("api");

  async function runHandler(name, req, res) {
    const mod = await import(
      pathToFileURL(path.join(apiRoot, `${name}.js`)).href + `?t=${Date.now()}`
    );
    await mod.default(req, res);
  }

  return {
    name: "talkdid-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const url = req.url || "";
          if (url.startsWith("/api/challenge")) {
            return runHandler("challenge", req, res);
          }
          if (url.startsWith("/api/verify")) {
            return runHandler("verify", req, res);
          }
          if (url.startsWith("/api/binds")) {
            return runHandler("binds", req, res);
          }
        } catch (e) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: e.message || "API error" }));
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), talkdidApiPlugin()],
  server: {
    port: 5303,
    host: true,
  },
  resolve: {
    dedupe: ["react", "react-dom", "@ckb-ccc/connector-react"],
  },
  optimizeDeps: {
    include: ["@ckb-ccc/connector-react", "@ckb-ccc/ccc", "@ckb-ccc/did-ckb"],
  },
});
