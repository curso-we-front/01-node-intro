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
const filterArticles = require("./scripts/readArticles");
const { log } = require("console");

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, "../data/articles.json");

// TODO: implementar

function getArticle(id) {
  const json = fs.readFileSync(DATA_PATH, "utf8");
  const articles = JSON.parse(json);
  const foundArticle = articles.find((article) => article.id === parseInt(id));
  return foundArticle;
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const response = { message: "Blog API", version: "1.0" };
    return res.end(JSON.stringify(response));
  }

  if (req.method === "GET" && req.url === "/articles") {
    const articles = filterArticles(DATA_PATH);
    console.log(articles);

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    return res.end(JSON.stringify(articles));
  }

  if (req.method === "GET" && req.url.startsWith("/articles/")) {
    const id = req.url.split("/")[2];
    const foundArticle = getArticle(id);
    res.setHeader("Content-Type", "application/json");
    if (!foundArticle) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ message: "Articulo no encontrado" }));
    }

    if (foundArticle.published) {
      res.statusCode = 200;
      return res.end(JSON.stringify(foundArticle));
    }
  }
  res.statusCode = 404;
  return res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = server; // necesario para los tests
