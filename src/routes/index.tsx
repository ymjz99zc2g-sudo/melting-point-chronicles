import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const FEATURES = [
  { icon: '🎮', title: 'Open World School RPG', desc: 'Explore Melting Point College freely — classrooms, rooftop, secret basement and more.' },
  { icon: '🔥', title: 'Aura System', desc: 'Level up from Dormant to Aura King. Your aura changes how NPCs react to you.' },
  { icon: '🇳🇬', title: 'Full Pidgin Vibes', desc: 'Authentic Nigerian PH school dialogue. Isi Owu go shout, your crew go hype you.' },
  { icon: '👤', title: '8 Playable Characters', desc: 'Michael, Ifeoma, Amara, Trevor, David, Mike, Gabriel — each with unique quests.' },
  { icon: '📖', title: '7 Story Chapters', desc: 'From new student arrival to the epic WAEC Guardian battle against Isi Owu.' },
  { icon: '⚽', title: 'Mini-Games', desc: 'Football matches, coding challenges, exam survival, rooftop parkour and more.' },
  { icon: '🎭', title: 'Multiple Endings', desc: 'Top Student, Football Legend, Aura King, Chaos... your choices matter.' },
  { icon: '📱', title: 'Mobile-First', desc: 'Built for Android. Virtual joystick + action buttons. Play anywhere.' },
]

export default function LandingPage() {
  const [creatorUnlocked] = useState(false)

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <span className="hero-badge">🔥 Nigerian School RPG — PH Vibes Only</span>
        <img
          src="https://i.postimg.cc/d0J3BpQc/F0632B6A-A5D4-47E7-BAEA-0F3BA36C5DE6.png"
          alt="Melting Point Chronicles Game Cover"
          className="hero-cover"
        />
        <h1 className="hero-title">MELTING POINT<br />CHRONICLES</h1>
        <p className="hero-sub">
          A story-driven anime school RPG set in a Nigerian secondary school in Port Harcourt.
          Choose your character, build your aura, survive exams, and uncover the secrets of Melting Point College.
        </p>
        <p className="hero-pidgin">
          "I be Aura King — nobody fit stop me for this school!" 🔥
        </p>
        <div className="hero-btns">
          <Link to="/game" className="btn-primary">🎮 Play Now</Link>
          <Link to="/avatar" className="btn-secondary">👤 Choose Character</Link>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        {[
          { num: '8', label: 'Playable Characters' },
          { num: '7', label: 'Story Chapters' },
          { num: '14+', label: 'Game Locations' },
          { num: '6', label: 'Aura Levels' },
          { num: '6', label: 'Possible Endings' },
          { num: '7+', label: 'Mini-Games' },
        ].map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section className="section">
        <p className="section-sub accent mb-1">// What's inside</p>
        <h2 className="section-title">Game <span className="accent2">Features</span></h2>
        <p className="section-sub">Everything wey make this game different from ordinary school game</p>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CREATOR SECTION */}
      <section className="creator-section">
        <div className="section" style={{paddingTop: 0, paddingBottom: 0}}>
          <p className="section-sub accent mb-1">// Made with 🔥</p>
          <h2 className="section-title mb-3">From the <span className="accent">Creator</span></h2>
        </div>
        <div className="creator-card">
          <div className="creator-header">
            <span>👨‍💻</span>
            <span>Michael — Developer & Student</span>
          </div>
          <div className="creator-body">
            <div className="creator-image-wrap">
              {creatorUnlocked ? (
                <img
                  src="https://i.postimg.cc/FHmpp9YB/43373877-80E6-4595-8C49-D18AA27B650F.jpg"
                  alt="Michael - the creator"
                />
              ) : (
                <img
                  src="https://i.postimg.cc/bJ8tnR3m/845BD746-76E6-4F13-B77C-5C3EE2CFBBD5.png"
                  alt="Michael character"
                  style={{filter: 'blur(0px)'}}
                />
              )}
              {!creatorUnlocked && (
                <div className="locked-overlay">
                  <span className="lock-icon">🔒</span>
                  <p>Beat the Tutorial Level to unlock Michael's real photo!</p>
                  <Link to="/game" className="btn-primary" style={{fontSize:'0.75rem', padding:'0.5rem 1rem'}}>
                    Go Play →
                  </Link>
                </div>
              )}
            </div>
            <p className="creator-text">
              This game was made by <strong>Michael</strong> — also a student like you. We literally went to same school bruv 😭. So I made this game but am still developing it tho, just trying my best to make it fun, relatable, and epic for everyone in this school.
            </p>
          </div>
        </div>
      </section>

      {/* AURA LEVELS */}
      <section className="section">
        <p className="section-sub accent mb-1">// Progression System</p>
        <h2 className="section-title">The <span className="accent2">Aura</span> System</h2>
        <p className="section-sub">Your aura is your power. It grows as you complete quests, ace exams, and build reputation.</p>
        <div className="aura-levels">
          {[
            { label: '① Dormant', cls: 'aura-1' },
            { label: '② Rising', cls: 'aura-2' },
            { label: '③ Focused', cls: 'aura-3' },
            { label: '④ Elite', cls: 'aura-4' },
            { label: '⑤ Legendary', cls: 'aura-5' },
            { label: '⑥ Aura King 👑', cls: 'aura-6' },
          ].map(a => (
            <span key={a.label} className={`aura-badge ${a.cls}`}>{a.label}</span>
          ))}
        </div>

        <div className="pidgin-quote">
          "Aura Walk activate! Na me be Aura King for this school — nobody fit question am!"
          <div className="quote-char">— Michael, Chapter 6</div>
        </div>
      </section>

      {/* STORY CHAPTERS */}
      <section className="section" style={{paddingTop: 0}}>
        <p className="section-sub accent mb-1">// The Story</p>
        <h2 className="section-title">Story <span className="accent">Chapters</span></h2>
        <p className="section-sub mb-3">Seven chapters of drama, friendship, exams, and aura battles</p>
        <div className="chapters-list">
          {[
            { num: '01', title: 'The New Student', desc: 'Michael arrives at Melting Point. First day, first impressions, first aura awakening.', locked: false },
            { num: '02', title: 'Suspicious Teacher', desc: 'Rumors about Isi Owu begin. Something is off about this school...', locked: false },
            { num: '03', title: 'The First Exam', desc: 'Exam Survival Mode activated! Your choices affect your grades and reputation.', locked: false },
            { num: '04', title: 'Sports Festival', desc: 'Football, races, and competition. David and Ifeoma shine.', locked: true },
            { num: '05', title: 'School Secrets', desc: 'Amara reveals hidden truths. The secret basement is real.', locked: true },
            { num: '06', title: 'The Aura Awakens', desc: 'Full aura unlock. The school will never be the same.', locked: true },
            { num: '07', title: 'WAEC Trials', desc: 'The ultimate exam. Isi Owu\'s true form: WAEC Guardian.', locked: true },
            { num: '⚔', title: 'Final Battle', desc: 'Boss battle against Isi Owu. Three phases. Your ending depends on your journey.', locked: true },
          ].map(c => (
            <div key={c.num} className={`chapter-item ${c.locked ? 'chapter-locked' : ''}`}>
              <span className="chapter-num">{c.num}</span>
              <div className="chapter-info">
                <h3>{c.title} {c.locked ? '🔒' : '✅'}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center" style={{paddingTop: 0}}>
        <div style={{background: 'linear-gradient(135deg, rgba(155,89,182,0.15), rgba(255,107,53,0.1))', borderRadius: '20px', border: '1px solid var(--border)', padding: '3rem 1.5rem'}}>
          <h2 className="section-title mb-2">Ready to Enter <span className="accent">Melting Point</span>?</h2>
          <p className="section-sub mb-3">Choose your character and start your school adventure. We move! 🔥</p>
          <div className="hero-btns">
            <Link to="/avatar" className="btn-primary">👤 Select Character</Link>
            <Link to="/gallery" className="btn-secondary">🖼️ View Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
