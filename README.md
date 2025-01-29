
# ➕ ieee-certificate-validator 🚀

En este repositorio se encuentra el código fuente de la página web para la validación de certificados de la IEEE UNSA, desarrollada para la verificación de autenticidad de los certificados emitidos por la IEEE UNSA.

## 🚀 Descripción

Esta página fue desarrollada para ofrecer una herramienta de verificación de certificados de la IEEE UNSA, permitiendo a los usuarios comprobar la validez de sus certificados de manera sencilla. El sistema utiliza una base de datos respaldada por PocketBase, una API RESTful ligera y eficiente, para almacenar y gestionar los certificados.

### Características principales:
- Verificación rápida de certificados mediante el uso de identificadores únicos.
- Interfaz intuitiva para que los usuarios puedan ver y compartir sus certificados.
- Implementación de funcionalidad para descargar y compartir certificados en redes sociales.

## 🌐 Demo

Puedes probar la versión desplegada en el servidor [aquí](https://certificates-validator.ynoacamino.site).

## 📚 Recursos que se utilizaron

- [React](https://es.react.dev/reference/react): Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- [Next.js](https://nextjs.org/docs): Framework de React para la creación de aplicaciones web escalables y rápidas.
- [TailwindCSS](https://tailwindcss.com/docs/installation): Framework CSS de utilidad para un diseño eficiente y flexible.
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): Superconjunto de JavaScript que agrega tipado estático a las aplicaciones.
- [Lucide React](https://github.com/hexstroke/lucide-react): Conjunto de íconos de alta calidad para React.
- [PocketBase](https://pocketbase.io/docs): Base de datos sin servidor con API integrada para manejar la persistencia de datos.
- [SQLite](https://www.sqlite.org/docs.html): Sistema de gestión de bases de datos liviano.

## Estructura del Proyecto

El proyecto sigue una arquitectura modular organizada en carpetas que corresponden a los componentes, páginas, y funciones específicas de la aplicación.

## 📷 Capturas de Pantalla

![Página principal](https://ynoa-uploader.ynoacamino.site/uploads/1738099968_New%20Project.gif)

## 🎯 Ventajas

- **Server Side Rendering (SSR):** Next.js permite renderizar el contenido del lado del servidor, lo que mejora el tiempo de carga inicial y la experiencia del usuario.
- **Optimización SEO:** Gracias a la pre-renderización del contenido, los motores de búsqueda pueden indexar fácilmente el contenido de la página, mejorando la visibilidad en los resultados de búsqueda.
- **Selector de tema (Claro, Oscuro o del Sistema):** Los usuarios pueden cambiar entre los modos de visualización claro y oscuro, mejorando la accesibilidad y la experiencia.
- **Sistema de diseño coherente:** Utilizando TailwindCSS, el proyecto mantiene un estilo visual consistente y fácil de escalar.
- **Tipado estático con TypeScript:** Al emplear TypeScript, el código es más robusto, detectando errores de manera temprana y mejorando la mantenibilidad.

## 🛠️ Instrucciones de Uso

1. Clona el repositorio a través de HTTPS

```bash
git clone https://github.com/ynoacamino/certificate-validator.git
```

2. Accede a la carpeta clonada

```bash
cd ieee-ynoacamino
```

3. Descarga las dependencias con npm, pnpm, yarn o bun

```bash
npm install

# or

pnpm install

# or

bun install
```

4. Haz build del proyecto

```bash
npm run build

# or

pnpm run build

# or

bun run build
```

5. Despliega la aplicación

```bash
npm run start

# or

pnpm run start

# or

bun run start
```
