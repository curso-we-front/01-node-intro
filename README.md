# 01 — Introducción a Node.js

## Objetivo

Familiarizarte con Node.js sin frameworks: módulos, sistema de ficheros, y un servidor HTTP básico.

## Contexto

Vas a construir una pequeña utilidad de línea de comandos y un servidor HTTP nativo que sirve artículos de un blog en formato JSON. Todo sin Express, para entender qué pasa por debajo.

## Tareas

### Tarea 1 — Script de módulos (`src/utils/formatter.js`)
Implementa y exporta las siguientes funciones:
- `slugify(title)` → convierte un título a slug (`"Hola Mundo"` → `"hola-mundo"`)
- `formatDate(date)` → devuelve una fecha en formato `DD/MM/YYYY`
- `truncate(text, maxLength)` → trunca un texto y añade `...` si supera `maxLength`

### Tarea 2 — Lectura de ficheros (`src/scripts/readArticles.js`)
- Lee el fichero `data/articles.json`
- Filtra los artículos cuyo campo `published` sea `true`
- Imprime por consola título, fecha formateada y slug de cada uno (usa las utilidades del paso anterior)

### Tarea 3 — Servidor HTTP nativo (`src/server.js`)
Crea un servidor en el puerto `3000` que responda:
- `GET /` → `{ message: "Blog API", version: "1.0" }`
- `GET /articles` → array de artículos publicados del JSON
- `GET /articles/:id` → artículo por id, o `404` si no existe
- Cualquier otra ruta → `404 Not Found`

> Usa únicamente los módulos nativos: `http`, `fs`, `path`, `url`.

## Estructura esperada

```
01-node-intro/
├── data/
│   └── articles.json       ← ya existe, no modificar
├── src/
│   ├── utils/
│   │   └── formatter.js    ← Tarea 1 (implementar)
│   ├── scripts/
│   │   └── readArticles.js ← Tarea 2 (implementar)
│   └── server.js           ← Tarea 3 (implementar)
├── tests/
│   ├── formatter.test.js
│   └── server.test.js
└── package.json
```

## Cómo empezar

```bash
npm install
npm test          # ejecuta los tests
npm start         # arranca el servidor
```

## Criterios de evaluación

- [ ] `slugify`, `formatDate` y `truncate` pasan los tests
- [ ] El script imprime correctamente los artículos publicados
- [ ] El servidor responde con el Content-Type `application/json` correcto
- [ ] Las rutas devuelven los status codes correctos (200, 404)
- [ ] No se usa ningún paquete externo (solo módulos nativos de Node)
