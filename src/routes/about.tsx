import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const FULL_CAST = [
  { name: 'Michael', role: 'Protagonist / Creator', img: 'https://i.postimg.cc/bJ8tnR3m/845BD746-76E6-4F13-B77C-5C3EE2CFBBD5.png', tag: 'PLAYABLE' },
  { name: 'Ifeoma', role: 'Sports Queen', img: 'https://i.postimg.cc/sXyhWJwn/C7B761B7-8326-4CF2-B7CA-6C2E82E9ADA0.png', tag: 'PLAYABLE' },
  { name: 'Amara', role: 'Mystery Girl', img: 'https://i.postimg.cc/hjgdm0pM/B981C9E2-C0D4-4845-87DF-589A9A15A5AC.png', tag: 'PLAYABLE' },
  { name: 'Trevor', role: 'Tech Genius', img: 'https://i.postimg.cc/B6sKFCMp/D60FC427-A35A-43B6-A90B-2DB5D2788983.png', tag: 'PLAYABLE' },
  { name: 'David', role: 'Football Captain', img: 'https://i.postimg.cc/6QBq0g6s/EFA2B168-07B3-48E2-8F3B-A4E48075DD8E.png', tag: 'PLAYABLE' },
  { name: 'Mike', role: 'Mischievous Twin', img: 'https://i.postimg.cc/V6RbWbhw/92709A66-64C7-46A9-A637-6A0B8343861C.png', tag: 'PLAYABLE' },
  { name: 'Gabriel', role: 'Calm Twin', img: 'https://i.postimg.cc/ZqjRDHn7/16BFC1AA-843A-417A-8B85-34B2CF3FDD8F.png', tag: 'PLAYABLE' },
  { name: 'Isi Owu', role: 'Final Boss Teacher', img: 'https://i.postimg.cc/hGKvr6Dk/9212B908-242F-42A7-A0BD-6B005BE6DF5D.png', tag: 'BOSS' },
  { name: 'Chidinma', role: 'Top Student NPC', img: null, tag: 'NPC' },
  { name: 'Kelechi', role: 'Sleeping Student NPC', img: null, tag: 'NPC' },
  { name: 'Adaeze', role: 'School Gossip NPC', img: null, tag: 'NPC' },
  { name: 'Samuel', role: 'Transfer Student NPC', img: null, tag: 'NPC' },
  { name: 'Emeka', role: 'Class Clown NPC', img: null, tag: 'NPC' },
]

export default function AboutPage() {
  return (
    <div className="section">
      {/* ABOUT HERO */}
      <div className="about-hero">
        <img
          src="https://i.postimg.cc/d0J3BpQc/F0632B6A-A5D4-47E7-BAEA-0F3BA36C5DE6.png"
          alt="Melting Point Chronicles Cover"
          className="about-cover"
        />
        <div className="about-text">
          <h1>Melting Point <span className="accent">Chronicles</span></h1>
          <div className="tagline">"Na PH school vibes — nothing else like am" 🔥</div>
          <p>
            A story-driven anime school RPG set in a Nigerian secondary school in Port Harcourt.
            Melting Point Chronicles is a love letter to PH school culture — the friendships,
            the drama, the exams, the teachers you feared, and the moments you'll never forget.
          </p>
          <p>
            The game features an authentic Nigerian secondary school experience:
            cream shirts, scarlet trousers, morning assembly, Isi Owu's surprise tests,
            rooftop secrets, and the rise from Dormant to Aura King.
          </p>
          <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'0.75rem'}}>
            {['Open World RPG', 'Anime Style', 'Nigerian PH', 'Story-Driven', 'Mobile-First'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* FULL CAST */}
      <h2 className="section-title mb-2">🎬 Full <span className="accent2">Cast</span></h2>
      <p className="section-sub mb-3">Every character in Melting Point Chronicles</p>
      <div className="cast-grid">
        {FULL_CAST.map(c => (
          <div key={c.name} className="cast-card">
            {c.img ? (
              <img src={c.img} alt={c.name} className="cast-img" />
            ) : (
              <div className="cast-img" style={{background:'var(--bg-card2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem'}}>
                👤
              </div>
            )}
            <div className="cast-info">
              <h3>{c.name}</h3>
              <p>{c.role}</p>
              <span style={{
                fontSize:'0.6rem', padding:'0.1rem 0.4rem', borderRadius:'3px', fontWeight:700,
                background: c.tag === 'PLAYABLE' ? 'rgba(0,212,255,0.15)' : c.tag === 'BOSS' ? 'rgba(220,20,60,0.2)' : 'rgba(155,89,182,0.2)',
                color: c.tag === 'PLAYABLE' ? 'var(--aura)' : c.tag === 'BOSS' ? 'var(--scarlet)' : 'var(--accent2)',
              }}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* CREATOR MESSAGE */}
      <h2 className="section-title mb-3">👨‍💻 From the <span className="accent">Creator</span></h2>
      <div className="creator-card" style={{maxWidth:'100%'}}>
        <div className="creator-header">
          <span>💬</span>
          <span>Michael — Developer, Student, Main Character 🥴</span>
        </div>
        <div className="creator-body">
          <div style={{display:'flex', gap:'1.5rem', flexWrap:'wrap', alignItems:'flex-start'}}>
            <div style={{flex:1, minWidth:'240px'}}>
              <p className="creator-text" style={{marginBottom:'1rem'}}>
                This game was made by <strong>Michael</strong> — also a student like you. We literally went to same school bruv 😭 so I made this game but am still developing it tho, just trying my best to make it fun, relatable, and weirdly iconic for everyone.
              </p>
              <p className="creator-text" style={{marginBottom:'1rem'}}>
                So if you're not in my game please start existing so I'd add you. Check it out 🥴
              </p>
              <p className="creator-text">
                <strong>The vision:</strong> A living, super relatable Nigerian secondary school anime RPG — full of pidgin vibes, friendship, exams, aura, drama, and unforgettable memories. Please don't judge it too hard yet; it's still building.
              </p>
            </div>
            <div style={{width:'min(140px,40%)', flexShrink:0}}>
              <div style={{position:'relative', borderRadius:'12px', overflow:'hidden', border:'2px solid var(--border)'}}>
                <img
                  src="https://i.postimg.cc/bJ8tnR3m/845BD746-76E6-4F13-B77C-5C3EE2CFBBD5.png"
                  alt="Michael"
                  style={{width:'100%', display:'block'}}
                />
                <div style={{
                  position:'absolute', inset:0,
                  background:'rgba(10,6,20,0.85)',
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'0.5rem'
                }}>
                  <span style={{fontSize:'2rem'}}>🔒</span>
                  <p style={{color:'var(--text-dim)', fontSize:'0.7rem', textAlign:'center', padding:'0 0.5rem'}}>
                    Real photo unlocks after tutorial
                  </p>
                  <a href="/game" style={{background:'var(--accent)', color:'white', padding:'0.3rem 0.7rem', borderRadius:'6px', fontSize:'0.65rem', fontWeight:700, textDecoration:'none'}}>
                    Go Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GAME DETAILS */}
      <div className="divider" />
      <h2 className="section-title mb-3">📋 Game <span className="accent2">Details</span></h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:'1rem'}}>
        {[
          { label: 'Title', value: 'Melting Point Chronicles' },
          { label: 'Version', value: 'v0.1 Web Prototype' },
          { label: 'Genre', value: 'Open World School RPG' },
          { label: 'Setting', value: 'Nigerian Secondary School, PH' },
          { label: 'Visual Style', value: 'Hybrid Anime + Stylized' },
          { label: 'Platform', value: 'Web / Android (coming)' },
          { label: 'Characters', value: '8 Playable + NPCs' },
          { label: 'Developer', value: 'Michael (Solo Dev) 🥴' },
        ].map(d => (
          <div key={d.label} style={{background:'var(--bg-card)', borderRadius:'10px', border:'1px solid var(--border)', padding:'1rem'}}>
            <div style={{color:'var(--text-dim)', fontSize:'0.72rem', marginBottom:'0.3rem', textTransform:'uppercase', letterSpacing:'1px'}}>{d.label}</div>
            <div style={{fontWeight:700, fontSize:'0.9rem'}}>{d.value}</div>
          </div>
        ))}
      </div>

      {/* CREDITS */}
      <div className="credit-box">
        <h2>🎬 Credits</h2>
        <div className="credit-item"><strong>Game Design & Development:</strong> Michael</div>
        <div className="credit-item"><strong>Characters:</strong> Ifeoma, Amara, Trevor, David, Mike, Gabriel, Isi Owu + All NPCs</div>
        <div className="credit-item"><strong>Setting:</strong> Real Melting Point College, Port Harcourt, Nigeria</div>
        <div className="credit-item"><strong>Tech Stack:</strong> React + TanStack Router + Canvas API + Tailwind CSS + Netlify</div>
        <div className="credit-item" style={{marginTop:'1rem', color:'var(--accent)', fontStyle:'italic'}}>
          "This is what I decided to do. Still developing. Check am out 🥴" — Michael
        </div>
      </div>
    </div>
  )
}
