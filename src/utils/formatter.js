/**
 * Tarea 1: Implementa las siguientes funciones de utilidad.
 * No cambies los nombres ni las firmas de las funciones.
 */

/**
 * Convierte un título en un slug URL-friendly.
 * Ejemplo: "Hola Mundo!" → "hola-mundo"
 * @param {string} title
 * @returns {string}
 */
function slugify(title) {
  // TODO: implementar
}

/**
 * Formatea una fecha ISO en DD/MM/YYYY.
 * Ejemplo: "2024-01-15T10:00:00Z" → "15/01/2024"
 * @param {string|Date} date
 * @returns {string}
 */
function formatDate(date) {
  // TODO: implementar
}

/**
 * Trunca un texto si supera maxLength caracteres, añadiendo "...".
 * Ejemplo: truncate("Hola mundo cruel", 8) → "Hola mun..."
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncate(text, maxLength) {
  // TODO: implementar
}

module.exports = { slugify, formatDate, truncate };
