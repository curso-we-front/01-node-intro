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

function refactorPublishedArticles(dataPath) {
  const json = fs.readFileSync(dataPath, "utf8");
  const articles = JSON.parse(json);
  const filteredArticles = articles
    .filter((article) => article.published)
    .map((article) => {
      return {
        Titulo: article.title,
        Slug: slugify(article.title),
        Fecha: formatDate(article.createdAt),
      };
    });
  return filteredArticles;
}

function filterArticles(dataPath) {
  const json = fs.readFileSync(dataPath, "utf8");
  const articles = JSON.parse(json);
  const filteredArticles = articles
    .filter((article) => article.published);
  return filteredArticles;
}

module.exports = filterArticles;
