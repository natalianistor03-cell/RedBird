# 🐦 RedBird - Twitter Clone

Una aplicación web que replica las funcionalidades principales de Twitter, construida con React y React Router.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite) ![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)

---

## ✨ Características

- 📝 Publicar, editar y eliminar posts
- ❤️ Dar like a posts
- 💬 Responder a posts
- 🔍 Buscar posts en tiempo real
- 📊 Ordenar por recientes o por popularidad
- 👤 Página de perfil con estadísticas
- 🔗 Página de detalle por post
- 💾 Persistencia de datos con `localStorage`

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) — Librería de UI
- [Vite](https://vitejs.dev/) — Bundler y entorno de desarrollo
- [React Router](https://reactrouter.com/) — Navegación entre páginas
- [Context API](https://react.dev/reference/react/createContext) — Estado global

---

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/clon-twitter.git
cd clon-twitter
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📁 Estructura del proyecto

```
clon-twitter/
├── src/
│   ├── components/
│   │   ├── NewPostForm.jsx    → formulario para publicar
│   │   ├── PostList.jsx       → lista de posts con búsqueda y orden
│   │   ├── PostCard.jsx       → tarjeta individual de post
│   │   └── ReplySection.jsx   → sección de respuestas
│   ├── context/
│   │   └── PostContext.jsx    → estado global con Context API
│   ├── pages/
│   │   ├── Home.jsx           → página principal
│   │   ├── Profile.jsx        → página de perfil
│   │   └── PostDetail.jsx     → página de detalle de post
│   ├── App.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

---

## 🧠 Conceptos practicados

- `useState` y `useEffect`
- `useContext` y Context API para estado global
- `localStorage` para persistencia de datos
- Componentes y props
- Manejo de arrays en el estado (añadir, editar, eliminar, filtrar)
- React Router — rutas, navegación y rutas dinámicas con `useParams`
- Filtrado en tiempo real

---

## 📸 Páginas

| Ruta | Descripción |
|---|---|
| `/` | Feed principal con todos los posts |
| `/perfil` | Perfil del usuario con estadísticas |
| `/post/:id` | Detalle de un post con sus respuestas |

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.
