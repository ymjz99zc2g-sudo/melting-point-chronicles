# AGENTS.md — Melting Point Chronicles

A Nigerian secondary school anime RPG web prototype. All routes are in `src/routes/`, all styles in `src/styles.css`.

## Routes

| File | URL | Purpose |
|------|-----|---------|
| `__root.tsx` | — | Nav + footer shell |
| `index.tsx` | `/` | Landing page |
| `avatar.tsx` | `/avatar` | Character selection |
| `game.tsx` | `/game` | Canvas RPG prototype |
| `gallery.tsx` | `/gallery` | Character art gallery |
| `how-to-play.tsx` | `/how-to-play` | Controls + systems |
| `roadmap.tsx` | `/roadmap` | Dev roadmap |
| `about.tsx` | `/about` | Credits + cast |

## Game Engine Notes (game.tsx)

- Pure Canvas 2D in `requestAnimationFrame` loop
- Game state in `useRef` (no re-renders per frame)
- `keysRef` (Set) tracks keyboard — read in rAF loop
- `pressedRef` prevents key-repeat on E/Space
- React `useState` updates only for HUD display

## CSS Conventions

All styles in `src/styles.css`. CSS custom properties in `:root`. No Tailwind utilities in JSX — only named classes. Mobile-first with `@media (max-width: 768px)`.

## Images

All character images on `i.postimg.cc` (external). Michael's real photo URL is in `index.tsx` — locked behind tutorial (currently always locked, no persistent game state yet).

---

This document provides an overview of the project structure for developers and AI agents working on this codebase.
