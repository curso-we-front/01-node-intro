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

function getArticles(filePath) {
  const jsonString = fs.readFileSync(filePath, "utf8");
  const articles = JSON.parse(jsonString);

  const publishedArticles = articles.filter((article) => article.published);

  return publishedArticles.map((article) => ({
    id: article.id,
    title: article.title,
    slug: slugify(article.title),
    date: formatDate(article.createdAt),
  }));
}
module.exports = { getArticles };

// TODO: implementar
