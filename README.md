# Stickbeat · sitio web

Sitio estático de **Stickbeat** (GitHub Pages): portada, política de privacidad, términos y soporte.
Inglés en la raíz (idioma principal) y español en `/es/`. Sin dependencias externas (ni CSS ni JS de terceros).

- URL: https://llcaballeroll.github.io/stickbeat_web/
- Portada: `index.html` · Privacidad: `privacy.html` · Términos: `terms.html` · Soporte: `support.html`
  (y lo mismo en `es/`). `404.html` usa rutas absolutas `/stickbeat_web/…` porque GitHub Pages la sirve en cualquier ruta.
- `css/styles.css`: todo el diseño. Chasis tipo apple.com (mosaicos claro/oscuro, tipografía del sistema,
  monocromo) y el degradado de la marca `#FF2D6F → #FF8A00` solo en botones principales y cifras.
  Modo claro/oscuro automático con `color-scheme`. Animaciones suaves solo si el sistema no pide movimiento reducido.
- `js/site.js`: botones de tienda y aparición suave. **Cuando la app esté publicada, pega los enlaces de las
  tiendas en `URLS.ios` y `URLS.android`.** Mientras estén vacíos, los botones salen desactivados con el aviso
  «Coming soon to the App Store and Google Play» / «Muy pronto…». El botón de la barra lleva directo a la tienda del teléfono.
- `assets/img/`: íconos (`icon-32/180/192/512.png`, salen de `moviles/stickbeat/assets/brand/icon_1024.png` con `sips`)
  e `og-image.jpg` (1200×630, para compartir en redes).
- **Capturas** (faltan): `assets/img/shots/<idioma>-<pantalla>-<ancho>.webp`
  - idioma: `en`, `es`
  - pantalla: `editor`, `pack`, `sound`, `home`, `text`, `create`, `result`, `sounds`
  - ancho: `420` (420×912) y `760` (760×1651), proporción 1320×2868
  - ejemplo: `en-editor-760.webp`, `es-pack-420.webp` (32 archivos en total)
- `robots.txt` y `sitemap.xml` con todas las páginas en inglés y español.
- `app-ads.txt` **no va aquí**: vive en la raíz `llcaballeroll.github.io` (misma cuenta de AdMob que las otras apps).
