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

const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('url');

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, '../data/articles.json');

// TODO: implementar

const server = http.createServer((req, res) => {
  // TODO: implementar el router
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = server; // necesario para los tests
