# Renutre® — Rediseño 2026

## Ejecutar localmente

```bash
pnpm install
pnpm dev
```

## Publicar en Vercel

1. Subir el contenido de esta carpeta a una rama nueva del repositorio, por ejemplo `redesign-home`.
2. Esperar el Preview Deployment de Vercel.
3. Revisar desktop y mobile.
4. Hacer merge a `main` cuando esté aprobado.

## Pendiente antes de producción

- Conectar el formulario de newsletter con Brevo, Mailchimp o Resend.
- Reemplazar los enlaces `#` de Política de privacidad y Términos y condiciones.
- Revisar el recorte final de las fotografías en dispositivos reales.
- Confirmar la redacción definitiva de las credenciales recientes de Carla.

## Estructura nueva

- `components/home/*`: secciones de la home.
- `lib/site-config.ts`: WhatsApp, email, Instagram y ubicación.
- `lib/content.ts`: servicios y preguntas frecuentes.
- `public/images/renutre/*`: fotografías y recursos de marca.
