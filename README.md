# ISyRE – Sitio estático
Estructura multi-archivo (HTML/CSS/JS + JSON). Sin build, ideal para GitHub Pages.

## Estructura
- index.html (Home)
- soluciones.html
- proyectos.html
- galeria.html
- faq.html
- contacto.html
- aviso.html, terminos.html
- assets/css/style.css
- assets/js/app.js
- assets/img/logo.png
- data/*.json  (services, projects, gallery, faqs, site)

## Deploy en GitHub Pages
1. Crea un repo `isyre-site` y sube estos archivos.
2. Settings → Pages → Deploy from branch (main)/root.
3. Apunta `isyre.com` a Pages con CNAME y registros A/AAAA si usas Cloudflare.

## Editar contenido
- Servicios/Proyectos/Galería/FAQs: edita los JSON en `data/`.
- Datos de contacto y WhatsApp: `data/site.json`.
- Activa botón flotante de WhatsApp: `floating_whatsapp: true` en `data/site.json`.
- Reemplaza `assets/img/logo.png` por tu logo.

## Recomendaciones
- Imágenes 1200×800 (<= 250 KB).
- Añade GA4/Search Console pegando el script en cada HTML o pídeme que lo integre.

Guía para actualizar contenido dinámico (solo JSON)
0) Reglas generales (importante)
No cambies los nombres de archivos ni las claves (title, desc, items, etc.).


Respeta comas y llaves. Si el JSON queda mal formado, nada cargará.


Imágenes recomendadas: 1200×800 px (relación 3:2), ≤ 250 KB.


Videos: usa URLs de embed de YouTube (formato https://www.youtube.com/embed/ID).


Tras subir cambios:


En GitHub Pages: espera 1–2 min y forza recarga (Shift+Reload).


En local: sirve el sitio con un servidor (no file://).



1) Servicios (página “Soluciones” y widgets del Home)
Archivo: data/services.json
 Dónde se ve: index.html (resumen) y soluciones.html (lista completa)
 Estructura:
{
  "items": [
    {
      "title": "Internet administrado con hotspot",
      "desc": "Control por fichas (minutos/horas/días), límite de ancho por usuario y reportes.",
      "bullets": ["Portal cautivo", "Códigos QR", "Perfiles por tiempo"],
      "cta": "Cotizar"
    }
  ]
}
Qué puedes hacer:
Añadir un servicio: agrega otro objeto dentro de items.


Editar textos: cambia title, desc, bullets o cta.


Orden: reordena elementos en el array para cambiar la posición.



2) Proyectos (página “Proyectos”)
Archivo: data/projects.json
 Dónde se ve: proyectos.html
 Estructura:
{
  "items": [
    {
      "title": "COBAEV 17 (en implementación)",
      "desc": "2 enlaces de fibra → MikroTik → malla WiFi 3 edificios, con No-Break y protección.",
      "image": "https://tu-dominio/imagenes/proyecto1.jpg",
      "href": "#"
    }
  ]
}
Qué puedes hacer:
image: URL pública (sube al repo assets/img/ o usa CDN).


href: link opcional a un PDF, galería o detalle (usa # si no hay).


Agrega, edita o reordena objetos en items.



3) Galería (fotos y videos)
Archivo: data/gallery.json
 Dónde se ve: galeria.html
 Estructura (fotos):
{
  "photos": [
    {
      "title": "Antena en edificio A",
      "url": "https://tu-dominio/imagenes/antena-a.jpg",
      "caption": "Protección con pastilla y tierra física."
    }
  ],
  "videos": [
    {
      "title": "Cómo generar fichas",
      "youtube": "https://www.youtube.com/embed/ID_DEL_VIDEO",
      "caption": "Demo del portal hotspot."
    }
  ]
}
Qué puedes hacer:
Fotos: agrega elementos en photos con title, url, caption.


Videos: agrega elementos en videos con title, youtube (formato embed) y caption.



4) FAQs (Preguntas frecuentes)
Archivo: data/faqs.json
 Dónde se ve: faq.html
 Estructura:
{
  "items": [
    { "q": "¿Se puede vender internet con fichas?",
      "a": "Sí. Implementamos hotspot con fichas por minutos/horas/días y control de ancho de banda por usuario."
    }
  ]
}
Qué puedes hacer:
Añade preguntas/ respuestas como nuevos objetos dentro de items.


Edita textos q (pregunta) y a (respuesta).



5) Datos del sitio (contacto, WhatsApp, redes y botón flotante)
Archivo: data/site.json
 Afecta: footer de todas las páginas y CTA de WhatsApp en Contacto.
 Estructura:
{
  "phone": "(229) 000 0000",
  "email": "ceo@isyre.com",
  "whatsapp": "521XXXXXXXXXX",
  "floating_whatsapp": false,
  "socials": [
    { "label": "TikTok", "href": "https://tiktok.com/@isyre" },
    { "label": "Instagram", "href": "https://instagram.com/isyre" }
  ]
}
Qué puedes hacer:
Cambiar teléfono, email y WhatsApp (en formato internacional para wa.me).


Activar botón flotante de WhatsApp en todas las páginas:


floating_whatsapp: true (aparece abajo a la derecha).


Editar/añadir redes en socials.



6) Textos legales (no JSON, pero editables)
Aviso de Privacidad: aviso.html (párrafos listos para personalizar).


Términos del Servicio: terminos.html (lista base).


Si no hay cambios legales, no tocar estilos ni estructura, solo el texto.

7) Checklist de publicación
Edita los JSON en data/ (valida con un JSON linter si puedes).


Sube cambios a GitHub → Pages despliega solo.


Ctrl/Shift + Reload para limpiar caché.


Si algo no se ve:


Ver consola del navegador (F12) → errores de JSON.


Verifica rutas: deben ser data/archivo.json (relativas).


Si corres en local, usa un servidor (ej. npx serve .).



8) Ejemplos rápidos de “añadir uno nuevo”
Nuevo servicio:
{
  "title": "Fibra interna y cableado estructurado",
  "desc": "Tendido, certificación y organización de racks.",
  "bullets": ["Cat6/Cat6A", "Patch panels", "Etiquetado"],
  "cta": "Cotizar"
}
Nuevo proyecto:
{
  "title": "Secundaria Técnica 12",
  "desc": "Starlink + MikroTik + malla de 2 edificios, hotspot con fichas.",
  "image": "assets/img/proy-sec12.jpg",
  "href": "#"
}
Nueva foto de galería:
{
  "title": "MikroTik y patch panel",
  "url": "assets/img/rack-mikrotik.jpg",
  "caption": "Balanceo de 2 enlaces y QoS."
}
Nueva FAQ:
{
  "q": "¿Instalan en otros estados?",
  "a": "Sí, instalamos en toda la República. Viáticos según zona (base: Veracruz, Ver.)."
}

Especificaciones de imágenes
Galería (fotos)


Tamaño: 1200×800 px (relación 3:2).


Peso: ≤ 250 KB (ideal JPG/WebP a 70–80% de calidad).


Ruta sugerida: assets/img/galeria/...


En data/gallery.json usa url apuntando a ese archivo.


Proyectos (thumbnails)


Tamaño: 800×480 px (relación 5:3).


Peso: ≤ 180 KB.


Ruta: assets/img/proyectos/...


En data/projects.json usa la clave image.


Hero / banners (si agregan alguno)


Tamaño: 1600×900 px (16:9).


Peso: ≤ 350 KB.


Formato: JPG/WebP.


Nota: el diagrama de topología ya es SVG (perfecto).


Logos (alianzas/clientes)


Formato preferente: SVG.


Si es PNG: máx. 400×200 px y ≤ 100 KB.


Buenas prácticas


Convierte a WebP si puedes (menor peso).


Nombra archivos en minúsculas y sin espacios: proy-cobaev17-01.webp.


Comprime con Squoosh.app, ImageOptim o TinyPNG.


En los JSON, el campo title ya se usa como alt (accesibilidad).


Si quieres que todo se vea uniforme incluso si alguien sube otras proporciones, puedo añadir esta regla al CSS:
.gallery img { aspect-ratio: 3 / 2; object-fit: cover; }
(Así, las tarjetas de Galería mantienen 3:2 recortando lo sobrante.)
