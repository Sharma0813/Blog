# ReactBlog

A clean React + Vite blog starter with routing, sample posts, and a simple Create page that saves to `localStorage`.

## Quick Start

```bash
# 1) Extract and go inside the project
cd react-blog

# 2) Install deps
npm install

# 3) Start dev server
npm run dev

# 4) Build for production
npm run build && npm run preview
```

Open http://localhost:5173 by default.

## Change the content

- Edit `src/data/posts.json` to update the default posts.
- Use the **Create** page in the app to add posts (stored locally in your browser).
- Update styles in `src/styles.css`.
- Change header/links in `src/App.jsx`.

## Structure

```
react-blog/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  ├─ storage.js
│  ├─ assets/
│  ├─ components/
│  │  └─ Container.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Post.jsx
│  │  ├─ About.jsx
│  │  └─ Create.jsx
│  └─ data/
│     └─ posts.json
```

## Notes

- No backend required. New posts are saved in `localStorage`.
- To persist posts across machines, wire up a backend later (Express + Mongo etc.).
