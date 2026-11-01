import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/roadmap')({
  component: RoadmapPage,
})

export default function RoadmapPage() {
  return (
    <div className="section">
      <span className="hero-badge" style={{display:'inline-block', marginBottom:'1rem'}}>
        Development Plans
      </span>
      <h1 className="section-title">🚀 Future <span className="accent2">Roadmap</span></h1>
      <p className="section-sub">
        Melting Point Chronicles is still in development. Here's where we're headed — Michael is building this thing for real!
      </p>

      {/* PLATFORMS */}
      <div className="roadmap-grid">
        {[
          { icon: '🌐', name: 'Web Prototype', status: 'live', label: '✅ Live Now' },
          { icon: '📱', name: 'Android App', status: 'dev', label: '🔧 In Development' },
          { icon: '💻', name: 'PC Version', status: 'soon', label: '🔜 Coming Soon' },
          { icon: '🍎', name: 'iOS App', status: 'future', label: '🔮 Future' },
        ].map(p => (
          <div key={p.name} className="platform-card">
            <div className="platform-icon">{p.icon}</div>
            <div className="platform-name">{p.name}</div>
            <span className={`platform-status status-${p.status}`}>{p.label}</span>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* TIMELINE */}
      <h2 className="section-title mb-3">Development <span className="accent">Timeline</span></h2>
      <div className="roadmap-timeline">
        <div className="timeline-item">
          <div className="timeline-dot done" />
          <div className="timeline-label done">✅ DONE</div>
          <div className="timeline-title">Phase 1 — Web Prototype Launch</div>
          <div className="timeline-desc">
            Full website with landing page, character selection, playable game prototype, gallery, guide, and roadmap.
            All 8 characters with real renders. Pidgin dialogue system. Canvas-based movement + exploration.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot active" />
          <div className="timeline-label active">🔧 IN PROGRESS</div>
          <div className="timeline-title">Phase 2 — Full Story Chapters (Web)</div>
          <div className="timeline-desc">
            Implementing all 7 chapters + final boss battle. Proper quest system with branching choices.
            Ifeoma racing mini-game. Trevor coding challenge. Amara secret basement reveal.
            Multiple ending system based on player choices.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot soon" />
          <div className="timeline-label soon">🔜 NEXT UP</div>
          <div className="timeline-title">Phase 3 — Android Build</div>
          <div className="timeline-desc">
            Port to Android using React Native or a game engine (Unity/Godot).
            Full touch controls with virtual joystick. Offline play support.
            Push notifications for daily school events. Save system with cloud backup.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot future" />
          <div className="timeline-label future">🔮 FUTURE</div>
          <div className="timeline-title">Phase 4 — Expanded World + More Characters</div>
          <div className="timeline-desc">
            Add more real classmates from school (if you want to be in the game, start existing 🥴).
            Expand the school map — add Town Area, Internet Café, character homes.
            New side quests, voice acting (Nigerian cast), and seasonal school events.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot future" />
          <div className="timeline-label future">🔮 FUTURE</div>
          <div className="timeline-title">Phase 5 — Multiplayer + PvP Aura Battles</div>
          <div className="timeline-desc">
            Online multiplayer — challenge your friends' aura levels.
            PvP quiz battles and football tournaments.
            Global leaderboard. Aura King title competition.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot future" />
          <div className="timeline-label future">🔮 DISTANT</div>
          <div className="timeline-title">Phase 6 — Full 3D + Console Port</div>
          <div className="timeline-desc">
            Full 3D environment. Proper anime cutscenes.
            PC Steam release. iOS App Store.
            The full vision: real Nigerian school anime RPG with console polish.
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* FEATURE WISHLIST */}
      <h2 className="section-title mb-3">🎮 Upcoming <span className="accent2">Features</span></h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px,1fr))', gap:'1rem'}}>
        {[
          { icon: '🎵', title: 'Soundtrack', desc: 'Nigerian afrobeats + anime OST blend. School bell sound effects.' },
          { icon: '🌙', title: 'Day/Night Cycle', desc: 'School day flows from morning assembly to 2am library adventures.' },
          { icon: '🏆', title: 'Achievement System', desc: 'Unlock badges for: first aura activation, beating Isi Owu, finding all secrets.' },
          { icon: '📱', title: 'Push Notifications', desc: '"MICHAEL! Assembly don start!" Get school event alerts on your phone.' },
          { icon: '💾', title: 'Save System', desc: 'Save your progress. Multiple save slots. Cloud backup.' },
          { icon: '🎨', title: 'Customization', desc: 'Customize Michael\'s hoodie colors. Unlock new outfits.' },
          { icon: '📸', title: 'Photo Mode', desc: 'Take screenshots with your character. Share to social media.' },
          { icon: '🗣️', title: 'Voice Acting', desc: 'Nigerian voice actors for main characters. Full pidgin delivery.' },
        ].map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{marginTop:'3rem', background:'linear-gradient(135deg, rgba(155,89,182,0.1), rgba(255,107,53,0.05))', borderRadius:'20px', border:'1px solid var(--border)', padding:'2.5rem', textAlign:'center'}}>
        <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🥴</div>
        <h2 style={{fontFamily:'Orbitron,sans-serif', fontSize:'1.1rem', marginBottom:'0.75rem', color:'var(--accent)'}}>
          Want to be in the game?
        </h2>
        <p style={{color:'var(--text-dim)', maxWidth:'480px', margin:'0 auto 1.5rem', lineHeight:1.7, fontSize:'0.9rem'}}>
          "If you're not in my game please start existing so I'd add you" — Michael (the developer, also a student, also the main character)
        </p>
        <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
          <a href="/game" className="btn-primary">🎮 Play the Prototype</a>
          <a href="/about" className="btn-secondary">📋 See Full Cast</a>
        </div>
      </div>
    </div>
  )
}
