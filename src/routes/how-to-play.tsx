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

      {/* CONTROLS VISUAL */}
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

      {/* GUIDE CARDS */}
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

        <div className="guide-card">
          <div className="guide-icon">📊</div>
          <div className="guide-title">SKILL SYSTEM</div>
          <ul className="guide-list">
            <li><strong style={{color:'var(--accent)'}}>Academics</strong> — Improves exam performance</li>
            <li><strong style={{color:'var(--accent)'}}>Sports</strong> — Wins athletic events</li>
            <li><strong style={{color:'var(--accent)'}}>Technology</strong> — Unlocks computer missions</li>
            <li><strong style={{color:'var(--accent)'}}>Leadership</strong> — Improves NPC influence</li>
            <li>Skills level up through related activities</li>
            <li>Different characters start with different skill biases</li>
          </ul>
        </div>

        <div className="guide-card">
          <div className="guide-icon">🗺️</div>
          <div className="guide-title">EXPLORATION</div>
          <ul className="guide-list">
            <li>Start at School Gate (spawn point)</li>
            <li>Mini-map shows your position (top-right)</li>
            <li>Location name shows bottom-left of screen</li>
            <li>Some areas unlock as you progress</li>
            <li>Secret Basement — late-game area 🔒</li>
            <li>Rooftop — story scenes + secrets</li>
          </ul>
        </div>

        <div className="guide-card">
          <div className="guide-icon">⚔️</div>
          <div className="guide-title">BOSS BATTLE — ISI OWU</div>
          <ul className="guide-list">
            <li>Phase 1: Teacher Mode — Pop quizzes + detentions</li>
            <li>Phase 2: Exam Mode — Assignment Storm</li>
            <li>Phase 3: WAEC Guardian Form (FINAL)</li>
            <li>Abilities: Report Card Barrage, Aura Drain</li>
            <li>Need high Academics skill to resist</li>
            <li>Your ending depends on how you defeat him</li>
          </ul>
        </div>
      </div>

      {/* MINI GAMES */}
      <div className="divider" />
      <h2 className="section-title mb-2">🎲 <span className="accent2">Mini-Games</span></h2>
      <p className="section-sub mb-3">Available throughout your school adventure</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:'0.75rem'}}>
        {[
          {icon:'📝', name:'Exam Survival', desc:'Answer questions before time runs out'},
          {icon:'⚽', name:'Football Match', desc:'Score goals to beat rival schools'},
          {icon:'💻', name:'Coding Challenge', desc:'Solve Trevor\'s programming puzzles'},
          {icon:'🍽️', name:'Cafeteria Rush', desc:'Grab food before it runs out'},
          {icon:'🏃', name:'Rooftop Parkour', desc:'Race across the school rooftop'},
          {icon:'📚', name:'Notebook Hunt', desc:'Find missing notes before exam'},
          {icon:'🧠', name:'Quiz Battles', desc:'PvP quiz against other students'},
        ].map(mg => (
          <div key={mg.name} style={{background:'var(--bg-card)', borderRadius:'12px', border:'1px solid var(--border)', padding:'0.75rem'}}>
            <div style={{fontSize:'1.5rem', marginBottom:'0.4rem'}}>{mg.icon}</div>
            <div style={{fontWeight:700, fontSize:'0.82rem', marginBottom:'0.25rem'}}>{mg.name}</div>
            <div style={{color:'var(--text-dim)', fontSize:'0.75rem'}}>{mg.desc}</div>
          </div>
        ))}
      </div>

      {/* ENDINGS */}
      <div className="divider" />
      <h2 className="section-title mb-2">🏆 <span className="accent">Possible Endings</span></h2>
      <p className="section-sub mb-3">Your choices throughout the game determine which ending you get</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:'0.75rem'}}>
        {[
          {icon:'📚', name:'Top Student Ending', req:'High Academics + Reputation'},
          {icon:'⚽', name:'Football Legend Ending', req:'High Sports + David quest complete'},
          {icon:'💻', name:'Computer Genius Ending', req:'High Technology + Trevor quest complete'},
          {icon:'🦸', name:'School Hero Ending', req:'High Leadership + all main quests done'},
          {icon:'👑', name:'Aura King Ending', req:'Max Aura Level + defeat Isi Owu at full power'},
          {icon:'💥', name:'Chaos Ending', req:'Low reputation + cause maximum mayhem'},
        ].map(e => (
          <div key={e.name} style={{background:'var(--bg-card)', borderRadius:'12px', border:'1px solid var(--border)', padding:'1rem'}}>
            <div style={{fontSize:'1.5rem', marginBottom:'0.4rem'}}>{e.icon}</div>
            <div style={{fontWeight:700, fontSize:'0.82rem', marginBottom:'0.25rem', color:'var(--accent)'}}>{e.name}</div>
            <div style={{color:'var(--text-dim)', fontSize:'0.75rem'}}>Requires: {e.req}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
