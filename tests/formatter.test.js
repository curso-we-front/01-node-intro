const { slugify, formatDate, truncate } = require('../src/utils/formatter');

describe('slugify', () => {
  test('convierte a minúsculas', () => {
    expect(slugify('Hola Mundo')).toBe('hola-mundo');
  });
  test('elimina caracteres especiales', () => {
    expect(slugify('¡Hola, Mundo!')).toBe('hola-mundo');
  });
  test('reemplaza espacios múltiples', () => {
    expect(slugify('Node  JS  Básico')).toBe('node-js-basico');
  });
  test('elimina acentos', () => {
    expect(slugify('Introducción a Node.js')).toBe('introduccion-a-nodejs');
  });
});

describe('formatDate', () => {
  test('formatea fecha ISO a DD/MM/YYYY', () => {
    expect(formatDate('2024-01-15T10:00:00Z')).toBe('15/01/2024');
  });
  test('funciona con objeto Date', () => {
    expect(formatDate(new Date('2024-03-10'))).toBe('10/03/2024');
  });
  test('añade ceros a día y mes', () => {
    expect(formatDate('2024-02-03T00:00:00Z')).toBe('03/02/2024');
  });
});

describe('truncate', () => {
  test('no trunca si el texto es más corto', () => {
    expect(truncate('Hola', 10)).toBe('Hola');
  });
  test('trunca y añade puntos suspensivos', () => {
    expect(truncate('Hola mundo cruel', 8)).toBe('Hola mun...');
  });
  test('no trunca si la longitud es exacta', () => {
    expect(truncate('Hola', 4)).toBe('Hola');
  });
});
