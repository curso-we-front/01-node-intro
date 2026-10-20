/**
 * Tarea 2: Lee articles.json, filtra los publicados e imprime cada uno.
 *
 * Para cada artículo publicado imprime por consola:
 *   Título: <titulo>
 *   Slug:   <slug>
 *   Fecha:  <fecha formateada>
 *   ---
 *
 * Usa las utilidades de src/utils/formatter.js
 * Usa únicamente módulos nativos: fs, path
 */

const fs = require("fs");
const path = require("path");
const { slugify, formatDate } = require("../utils/formatter");

// TODO: implementar
const filePath = path.join(__dirname, "../../data/articles.json");
const fileData = fs.readFileSync(filePath, "utf8");
const articles = JSON.parse(fileData);

const publishedArticles = articles.filter((article) => article.published);

publishedArticles.forEach((article) => {
  console.log(
    `Titulo: ${article.title}, Slug: ${slugify(article.title)}, Fecha: ${formatDate(article.createdAt)}`,
  );
});
