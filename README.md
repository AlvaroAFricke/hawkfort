# HawkFortSec

Bienvenido al repositorio oficial de **HawkFortSec**, un sitio web moderno y responsivo construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com/). Este sitio aprovecha herramientas potentes para ofrecer una experiencia de usuario fluida con animaciones impactantes y un diseño eficiente.

## Características
- **Framework Astro**: Generación de sitios estáticos rápida y optimizada.
- **Tailwind CSS**: Framework CSS orientado a utilidades para desarrollo de interfaces rápidas.
- **Componentes Animados**: Efectos visuales mejorados con `tailwindcss-animated`.
- **Soporte de Correo Electrónico**: Funcionalidades integradas de correo electrónico usando `@emailjs/browser`.

## Cómo Empezar
Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### Requisitos Previos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v16 o más reciente)
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/) (recomendado para instalaciones más rápidas)

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/AlvaroAFricke/hawkfort.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd hawkfort
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

### Servidor de Desarrollo
Inicia el servidor de desarrollo:
```bash
npm run dev
```
Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver el sitio en acción.

### Construcción para Producción
Genera la construcción optimizada para producción:
```bash
npm run build
```
La salida estará en el directorio `dist`, lista para su despliegue.

### Vista Previa de Producción
Ejecuta un servidor local para previsualizar la construcción de producción:
```bash
npm run preview
```

## Estructura del Proyecto
El proyecto sigue la estructura estándar de directorios de Astro:
```
/
├── public/         # Recursos estáticos
├── src/
│   ├── components/ # Componentes reutilizables de UI
│   ├── layouts/    # Plantillas de diseño
│   ├── pages/      # Componentes de página
│   ├── styles/     # CSS global y personalizado
│   └── scripts/    # Archivos JavaScript
├── astro.config.mjs # Configuración de Astro
└── package.json    # Dependencias y scripts del proyecto
```

## Dependencias
Estas son las principales dependencias utilizadas en el proyecto:
- **[@astrojs/tailwind](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind)**: Integración de Tailwind CSS para Astro.
- **[@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)**: Biblioteca para el envío de correos desde el cliente.
- **[tailwindcss-animated](https://github.com/benface/tailwindcss-animated)**: Plugin para animaciones en Tailwind CSS.

## Contribuciones
¡Las contribuciones son bienvenidas! Si tienes sugerencias, informes de errores o solicitudes de funciones, no dudes en abrir un issue o enviar un pull request.

### Pasos para Contribuir
1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores.
3. Realiza tus cambios y súbelos a tu fork.
4. Envía un pull request con una descripción detallada de tus cambios.

## Licencia
Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Contacto
Para preguntas o soporte, comunícate con:
- **Autor**: Álvaro Fricke
- **Repositorio**: [HawkFortSec en GitHub](https://github.com/AlvaroAFricke/hawkfort)

---
¡Gracias por visitar HawkFortSec! ¡Feliz desarrollo! 🚀

