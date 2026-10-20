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
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}

/**
 * Formatea una fecha ISO en DD/MM/YYYY.
 * Ejemplo: "2024-01-15T10:00:00Z" → "15/01/2024"
 * @param {string|Date} date
 * @returns {string}
 */
function formatDate(date) {
  // TODO: implementar
  const objectDate = new Date(date);
  const day = String(objectDate.getDate()).padStart(2, "0");
  const month = String(objectDate.getMonth() + 1).padStart(2, "0");
  const year = objectDate.getFullYear();

  return day + "/" + month + "/" + year;
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
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

module.exports = { slugify, formatDate, truncate };
