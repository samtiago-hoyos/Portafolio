# Portafolio personal - Santiago Hoyos Montoya

Proyecto académico construido con React, Vite, JavaScript (JSX), CSS y React Router.

## Datos personales incluidos
- **Nombre:** Santiago Hoyos Montoya
- **Perfil:** Estudiante de Análisis y Desarrollo de Software
- **Correo:** santiagomontoyahoyos@gmail.com
- **GitHub:** https://github.com/samtiago-hoyos

## Requisitos
Tener instalado Node.js (incluye npm).

## Ejecutar el proyecto
Abre una terminal dentro de esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección local que indique Vite (normalmente http://localhost:5173).

Para comprobar que compila:

```bash
npm run build
```

## Estructura
```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   └── Screen.jsx
├── data/
│   └── projects.js
├── pages/
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Conceptos aplicados del video
- `BrowserRouter` envuelve la aplicación desde `main.jsx`.
- `Routes` y `Route` definen Inicio (`/`), Proyectos (`/proyectos`), Contacto (`/contacto`) y la ruta comodín para 404.
- `Navbar` usa `NavLink` para navegar entre páginas.
- `Screen` recibe `title` y `children` mediante props.
- `ProjectCard` recibe `title`, `description`, `tags` y `type` mediante props.
- `Projects.jsx` recorre el arreglo de proyectos con `.map()` y utiliza `key`.
- Los componentes se exportan e importan para mantener el código organizado.

## Subirlo a GitHub
1. Crea un repositorio nuevo en GitHub llamado `portafolio-react` (puede ser público).
2. Abre la terminal en esta carpeta y ejecuta:

```bash
git init
git add .
git commit -m "Crear portafolio personal con React"
git branch -M main
git remote add origin https://github.com/samtiago-hoyos/portafolio-react.git
git push -u origin main
```

Si Git indica que `origin` ya existe, usa:
```bash
git remote set-url origin https://github.com/samtiago-hoyos/portafolio-react.git
```

**Importante:** el proyecto está preparado localmente, pero estos comandos todavía debes ejecutarlos en tu equipo y crear el repositorio en GitHub. No se ha publicado automáticamente.

## Personalización pendiente
Los tres proyectos de la sección Proyectos son ejemplos basados en ejercicios académicos. Edita `src/data/projects.js` para ajustar nombres, descripciones, tecnologías y enlaces a repositorios reales.
