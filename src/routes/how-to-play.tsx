import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/how-to-play')({
  component: HowToPlayPage,
})

export default function HowToPlayPage() {
  return (
    <div className="section">
      <span className="hero-badge" style={{display:'inline-block', marginBottom:'1rem'}}>
        Controls + Systems Guide
      </span>
      <h1 className="section-title">📖 How to <span className="accent">Play</span></h1>
      <p className="section-sub">Everything you need to know about Melting Point Chronicles</p>

      <div className="controls-visual">
        <h2 style={{fontFamily:'Orbitron,sans-serif', fontSize:'0.95rem', marginBottom:'1.5rem', color:'var(--accent)'}}>
          CONTROLS — MOBILE + KEYBOARD
        </h2>
        <div className="controls-row">
          <div className="control-side">
            <h3>MOVE (Left)</h3>
            <div className="dpad-visual">
              <div className="dv dv-up">▲</div>
              <div className="dv dv-down">▼</div>
              <div className="dv dv-left">◀</div>
              <div className="dv dv-right">▶</div>
            </div>
            <p style={{color:'var(--text-dim)', fontSize:'0.72rem', marginTop:'0.75rem'}}>
              D-Pad / WASD / Arrow Keys
            </p>
          </div>
          <div className="control-side">
            <h3>ACTIONS (Right)</h3>
            <div className="action-visual">
              <div className="av-btn av-a"><span>💬</span><span>Talk</span></div>
              <div className="av-btn av-b"><span>💨</span><span>Sprint</span></div>
              <div className="av-btn av-c"><span>⚡</span><span>Aura</span></div>
            </div>
            <p style={{color:'var(--text-dim)', fontSize:'0.72rem', marginTop:'0.75rem'}}>
              E = Talk/Interact • Shift = Sprint
            </p>
          </div>
          <div className="control-side">
            <h3>KEYBOARD</h3>
            <div style={{textAlign:'left', fontSize:'0.8rem'}}>
              {[
                ['WASD / ↑↓←→', 'Move'],
                ['E or Space', 'Interact / Continue'],
                ['Shift', 'Sprint'],
                ['ESC', 'Pause / Menu'],
              ].map(([key, action]) => (
                <div key={key} style={{display:'flex', gap:'0.75rem', marginBottom:'0.5rem'}}>
                  <code style={{background:'var(--bg-card2)', padding:'0.15rem 0.5rem', borderRadius:'4px', fontSize:'0.72rem', color:'var(--aura)', whiteSpace:'nowrap'}}>
                    {key}
                  </code>
                  <span style={{color:'var(--text-dim)'}}>{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="guide-grid">
        <div className="guide-card">
          <div className="guide-icon">🔥</div>
          <div className="guide-title">AURA SYSTEM</div>
          <ul className="guide-list">
            <li>Aura is your power source — it fuels abilities</li>
            <li>Starts at Dormant, grows to Aura King</li>
            <li>Complete quests + talk to NPCs to gain Aura XP</li>
            <li>Press ⚡ Aura button to activate special mode</li>
            <li>High aura = NPCs respect you more</li>
            <li>Low aura = "Aura don finish o!" warning</li>
          </ul>
        </div>

        <div className="guide-card">
          <div className="guide-icon">⭐</div>
          <div className="guide-title">REPUTATION SYSTEM</div>
          <ul className="guide-list">
            <li>Help students → Reputation rises</li>
            <li>Cause trouble → Reputation drops</li>
            <li>High rep: "Legend o! Respect to Aura King!"</li>
            <li>Low rep: "See this trouble boy. Security!"</li>
            <li>Affects which quests you get</li>
            <li>Determines your ending</li>
          </ul>
        </div>

        <div className="guide-card">
          <div className="guide-icon">💬</div>
          <div className="guide-title">DIALOGUE + NPCS</div>
          <ul className="guide-list">
            <li>Walk close to any NPC to trigger [Talk] prompt</li>
            <li>Press E / tap Talk button to interact</li>
            <li>Keep pressing to continue conversation</li>
            <li>Choices affect reputation + aura</li>
            <li>Ifeoma: Sports quests + racing</li>
            <li>Trevor: Tech challenges + coding</li>
            <li>Amara: Secret lore + hidden areas</li>
            <li>Isi Owu: Boss fights — avoid him! 😅</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
