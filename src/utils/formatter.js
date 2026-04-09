/**
 * Tarea 1: Implementa las siguientes funciones de utilidad.
 * No cambies los nombres ni las firmas de las funciones.
 */
// https://github.com/curso-we-front/01-node-intro
/**
 * Convierte un título en un slug URL-friendly.
 * Ejemplo: "Hola Mundo!" → "hola-mundo"
 * @param {string} title
 * @returns {string}
 */
function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Formatea una fecha ISO en DD/MM/YYYY.
 * Ejemplo: "2024-01-15T10:00:00Z" → "15/01/2024"
 * @param {string|Date} date
 * @returns {string}
 */
function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Trunca un texto si supera maxLength caracteres, añadiendo "...".
 * Ejemplo: truncate("Hola mundo cruel", 8) → "Hola mun..."
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

module.exports = { slugify, formatDate, truncate };
