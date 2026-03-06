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
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Formatea una fecha ISO en DD/MM/YYYY.
 * Ejemplo: "2024-01-15T10:00:00Z" → "15/01/2024"
 * @param {string|Date} date
 * @returns {string}
 */
function formatDate(date) {
  let parsedDate = new Date(date);
  const dateFormat = parsedDate.toLocaleDateString("es-ES");
  return dateFormat;
}

/**
 * Trunca un texto si supera maxLength caracteres, añadiendo "...".
 * Ejemplo: truncate("Hola mundo cruel", 8) → "Hola mun..."
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncate(text, maxlength) {
  return text.length > maxlength ? text.slice(0, maxlength) + "…" : text;
}


module.exports = { slugify, formatDate, truncate };
