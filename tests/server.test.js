const supertest = require('supertest');
const server = require('../src/server');

const request = supertest(server);

afterAll(() => server.close());

describe('GET /', () => {
  test('responde con 200 y mensaje de bienvenida', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/application\/json/);
    expect(res.body).toEqual({ message: 'Blog API', version: '1.0' });
  });
});

describe('GET /articles', () => {
  test('responde con 200 y un array', async () => {
    const res = await request.get('/articles');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('solo devuelve artículos publicados', async () => {
    const res = await request.get('/articles');
    expect(res.body.every(a => a.published === true)).toBe(true);
  });

  test('devuelve 3 artículos publicados', async () => {
    const res = await request.get('/articles');
    expect(res.body.length).toBe(3);
  });
});

describe('GET /articles/:id', () => {
  test('devuelve el artículo correcto', async () => {
    const res = await request.get('/articles/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.title).toBe('Introducción a Node.js');
  });

  test('devuelve 404 si no existe', async () => {
    const res = await request.get('/articles/999');
    expect(res.status).toBe(404);
  });

  test('devuelve 404 para artículo no publicado', async () => {
    const res = await request.get('/articles/3');
    expect(res.status).toBe(404);
  });
});

describe('Rutas desconocidas', () => {
  test('devuelve 404', async () => {
    const res = await request.get('/ruta-que-no-existe');
    expect(res.status).toBe(404);
  });
});
