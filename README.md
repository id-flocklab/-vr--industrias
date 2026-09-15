# VR en Industrias 4.0 — versión web

Réplica web de la presentación, con los clips de VR como video (no GIF) para que se
reproduzcan solos en cualquier navegador. Proyecto Vite vanilla (sin framework).

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # sirve dist/ localmente para probarlo
```

El build genera `dist/`, listo para deployar en cualquier hosting estático
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.) — no requiere servidor
ni backend.

## Estructura

- `index.html` — marcado de las 7 secciones (slides) de la presentación.
- `src/style.css` — estilos (paleta, tipografía, layout).
- `src/main.js` — navegación (scroll-snap, puntos laterales, flechas del teclado).
- `public/media/` — videos e imágenes servidos tal cual (no se procesan en el build).
