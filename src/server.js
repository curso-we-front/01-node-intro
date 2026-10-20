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

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, "../data/articles.json");
const fileData = fs.readFileSync(DATA_PATH, "utf8");
const articles = JSON.parse(fileData);
// TODO: implementar

const getPublishedArticles = () => {
  return articles.filter((article) => article.published);
};

const getArticleById = (id) => {
  return articles.find((article) => article.id === Number(id));
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    res.statusCode = 200;
    return res.end(JSON.stringify({ message: "Blog API", version: "1.0" }));
  }
  if (req.method === "GET" && pathname === "/articles") {
    res.statusCode = 200;
    return res.end(JSON.stringify(getPublishedArticles()));
  }
  if (req.method === "GET" && pathname.startsWith("/articles/")) {
    const id = req.url.replace("/articles/", "");
    const article = getArticleById(id);    
    if (article && article.published) {
      res.statusCode = 200;
      return res.end(JSON.stringify(article));
    }
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = server; // necesario para los tests
