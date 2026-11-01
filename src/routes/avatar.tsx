import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/avatar')({
  component: AvatarPage,
})

const CHARACTERS = [
  {
    id: 'michael',
    name: 'Michael',
    role: 'Main Protagonist',
    ability: 'Main Character Syndrome',
    img: 'https://i.postimg.cc/bJ8tnR3m/845BD746-76E6-4F13-B77C-5C3EE2CFBBD5.png',
    desc: 'Calm, confident, mysterious. Tall lean Nigerian with messy black hair and the iconic ROLLING LOUD hoodie. The school\'s hidden main character.',
    quote: '"I be Aura King — nobody fit question am!"',
    stats: ['Academics: ★★★★', 'Sports: ★★★★', 'Tech: ★★★', 'Leadership: ★★★★★'],
    quests: ['Aura Awakening', 'Secret Basement', 'All 7 Chapters'],
    defaultChar: true,
  },
  {
    id: 'ifeoma',
    name: 'Ifeoma',
    role: 'Sports Queen',
    ability: 'Sprint Queen — Auto-win races',
    img: 'https://i.postimg.cc/sXyhWJwn/C7B761B7-8326-4CF2-B7CA-6C2E82E9ADA0.png',
    desc: 'Competitive, funny, energetic. Dark skin, curly puff hair, white stockings. She\'s fast — like really fast.',
    quote: '"Make we race! I tell you I be Ifeoma!"',
    stats: ['Academics: ★★★', 'Sports: ★★★★★', 'Tech: ★★', 'Leadership: ★★★'],
    quests: ['Sports Festival', 'Running Challenges', 'School Competitions'],
    defaultChar: false,
  },
  {
    id: 'amara',
    name: 'Amara',
    role: 'Mystery Girl',
    ability: 'Lore Keeper — Unlock secrets early',
    img: 'https://i.postimg.cc/hjgdm0pM/B981C9E2-C0D4-4845-87DF-589A9A15A5AC.png',
    desc: 'Quiet, intelligent, observant. Fair skin, long black hair, small wrist tattoo. She knows things she probably shouldn\'t.',
    quote: '"School get secret wey nobody know..."',
    stats: ['Academics: ★★★★★', 'Sports: ★★', 'Tech: ★★★★', 'Leadership: ★★★'],
    quests: ['Secret Basement', 'Hidden Lore', '2am Library Visit'],
    defaultChar: false,
  },
  {
    id: 'trevor',
    name: 'Trevor',
    role: 'Tech Genius Bestie',
    ability: 'Tech Override — Hack school systems',
    img: 'https://i.postimg.cc/B6sKFCMp/D60FC427-A35A-43B6-A90B-2DB5D2788983.png',
    desc: 'Loyal, funny, brilliant. Grey sweater over uniform, always carrying a tablet. The computer lab is his domain.',
    quote: '"Guy! I get one coding puzzle for you!"',
    stats: ['Academics: ★★★★', 'Sports: ★★', 'Tech: ★★★★★', 'Leadership: ★★★'],
    quests: ['Computer Lab Missions', 'Coding Challenges', 'Tech Puzzles'],
    defaultChar: false,
  },
  {
    id: 'david',
    name: 'David',
    role: 'Football Captain',
    ability: 'Field General — Win all football events',
    img: 'https://i.postimg.cc/6QBq0g6s/EFA2B168-07B3-48E2-8F3B-A4E48075DD8E.png',
    desc: 'Confident, popular, athletic. Dark brown skin, strong build. Football is his life.',
    quote: '"Na the field I reign. No be small thing."',
    stats: ['Academics: ★★★', 'Sports: ★★★★★', 'Tech: ★★', 'Leadership: ★★★★'],
    quests: ['Football Tournament', 'Sports Festival', 'Team Leadership'],
    defaultChar: false,
  },
  {
    id: 'mike',
    name: 'Mike',
    role: 'Mischievous Twin',
    ability: 'Chaos Mode — Cause distractions',
    img: 'https://i.postimg.cc/V6RbWbhw/92709A66-64C7-46A9-A637-6A0B8343861C.png',
    desc: 'Playful, mischievous, energetic. Identical to Gabriel but has a permanent grin. If trouble dey happen, Mike dey nearby.',
    quote: '"Wahala? Na me cause am 😂"',
    stats: ['Academics: ★★★', 'Sports: ★★★★', 'Tech: ★★★', 'Leadership: ★★'],
    quests: ['Prank Missions', 'Comedy Events', 'Twin Adventures'],
    defaultChar: false,
  },
  {
    id: 'gabriel',
    name: 'Gabriel',
    role: 'Calm Twin',
    ability: 'Twin Sync — Share skills with Mike',
    img: 'https://i.postimg.cc/ZqjRDHn7/16BFC1AA-843A-417A-8B85-34B2CF3FDD8F.png',
    desc: 'Calm, serious, intelligent. Looks exactly like Mike but carries himself differently. The voice of reason in chaos.',
    quote: '"I no dey rush. Every move deliberate."',
    stats: ['Academics: ★★★★', 'Sports: ★★★', 'Tech: ★★★★', 'Leadership: ★★★'],
    quests: ['Twin Adventures', 'Study Missions', 'Secret Research'],
    defaultChar: false,
  },
]

export default function AvatarPage() {
  const [selected, setSelected] = useState('michael')
  const char = CHARACTERS.find(c => c.id === selected)!

  return (
    <div className="avatar-page">
      <div className="hero-badge" style={{display:'block', textAlign:'center', marginBottom:'1rem'}}>
        Step 1 of 2
      </div>
      <h1 className="avatar-title">Choose Your Character</h1>
      <p className="avatar-sub">
        Each character has unique abilities, quests, and possible endings. Michael is the default protagonist.
      </p>

      <div className="avatar-grid">
        {CHARACTERS.map(c => (
          <div
            key={c.id}
            className={`avatar-card ${selected === c.id ? 'selected' : ''} ${c.defaultChar ? 'default-char' : ''}`}
            onClick={() => setSelected(c.id)}
          >
            <img src={c.img} alt={c.name} className="avatar-img" />
            <div className="avatar-info">
              <div className="avatar-name">{c.name}</div>
              <div className="avatar-ability">⚡ {c.ability}</div>
              <div className="avatar-stats">
                {c.stats.slice(0,2).map(s => <span key={s} className="stat-badge">{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="selected-panel">
        <img src={char.img} alt={char.name} />
        <div className="selected-info">
          <h2>{char.name} {char.defaultChar ? '👑' : ''}</h2>
          <div className="role">{char.role}</div>
          <p className="desc">{char.desc}</p>
          <div className="card-quote">{char.quote}</div>
          <div style={{marginTop:'0.75rem'}}>
            <span className="card-ability">⚡ {char.ability}</span>
          </div>
          <div style={{marginTop:'1rem', display:'flex', gap:'0.4rem', flexWrap:'wrap'}}>
            {char.stats.map(s => <span key={s} className="stat-badge">{s}</span>)}
          </div>
          <div style={{marginTop:'0.75rem', display:'flex', gap:'0.4rem', flexWrap:'wrap'}}>
            {char.quests.map(q => <span key={q} className="tag">📋 {q}</span>)}
          </div>
          <div style={{marginTop:'1.5rem'}}>
            <Link
              to="/game"
              className="btn-primary"
              style={{fontSize:'0.88rem', padding:'0.75rem 1.5rem'}}
            >
              🎮 Play as {char.name}
            </Link>
          </div>
        </div>
      </div>

      <div className="divider" />
      <h2 className="section-title mb-2">Main <span className="accent2">Villain</span></h2>
      <p className="section-sub mb-3">The feared antagonist — Isi Owu awaits</p>
      <div className="card" style={{maxWidth: '400px', margin:'0 auto'}}>
        <img
          src="https://i.postimg.cc/hGKvr6Dk/9212B908-242F-42A7-A0BD-6B005BE6DF5D.png"
          alt="Isi Owu"
          className="card-img"
        />
        <div className="card-body">
          <div className="card-name">Isi Owu</div>
          <div className="card-role" style={{color:'var(--scarlet)'}}>Main Antagonist — Final Boss</div>
          <div className="card-desc">
            The most feared teacher in Melting Point College. Extremely strict, demands complete discipline. Has THREE boss phases: Teacher Mode → Exam Mode → WAEC Guardian Form.
          </div>
          <div className="card-quote">"MICHAEL! WHERE YOUR ASSIGNMENT?! WAEC Guardian form — ACTIVATE!"</div>
        </div>
      </div>
    </div>
  )
}
