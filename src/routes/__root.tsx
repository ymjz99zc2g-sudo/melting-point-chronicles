import { createFileRoute, Link, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'theme-color', content: '#0f0a1e' },
      { title: 'Melting Point Chronicles 🔥' },
      { name: 'description', content: 'A Nigerian secondary school anime RPG. Experience PH school life like never before.' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/', label: '🏠 Home' },
  { to: '/avatar', label: '👤 Characters' },
  { to: '/game', label: '🎮 Play' },
  { to: '/gallery', label: '🖼️ Gallery' },
  { to: '/how-to-play', label: '📖 Guide' },
  { to: '/roadmap', label: '🚀 Roadmap' },
  { to: '/about', label: '🎬 About' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const state = useRouterState()
  const path = state.location.pathname

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
        <span className="logo-flame">🔥</span>
        <span>MPC</span>
      </Link>
      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
        {open ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav-link ${path === l.to ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="root-body">
        <Nav />
        <main className="main-content">
          {children}
        </main>
        <footer className="site-footer">
          <p>🔥 Melting Point Chronicles &copy; 2025 — Made by Michael</p>
          <p className="footer-sub">Still developing… check am out 🥴</p>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
