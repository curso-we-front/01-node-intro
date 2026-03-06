/**
 * Tarea 3: Servidor HTTP nativo.
 *
 * Implementa las siguientes rutas:
 *   GET /            → { message: "Blog API", version: "1.0" }
 *   GET /articles    → array de artículos con published: true
 *   GET /articles/1  → artículo con id 1 (número), 404 si no existe
 *   Resto            → { error: "Not Found" } con status 404
 *
 * - Responde siempre con Content-Type: application/json
 * - Usa únicamente módulos nativos: http, fs, path, url
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { parse } = require("url");
const { getArticles } = require("./scripts/readArticles");

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, "../data/articles.json");
const allArticles = getArticles(DATA_PATH);

// TODO: implementar

function getIdArticles(id) {
  const idNum = Number(id);
  const idArticle = allArticles.find((articles) => articles.id === idNum);
  return idArticle;
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Blog API", version: "1.0" }));
  }

  if (req.method === "GET" && req.url === "/articles") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(allArticles));
  }

  if (req.method === "GET" && req.url.startsWith("/articles/")) {
    const id = req.url.split("/")[2];

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(getIdArticles(id)));
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Page not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = server; // necesario para los tests
