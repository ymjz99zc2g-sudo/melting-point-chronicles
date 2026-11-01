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
]

export default function AboutPage() {
  return (
    <div className="section">
      <div className="about-hero">
        <img src="https://i.postimg.cc/d0J3BpQc/F0632B6A-A5D4-47E7-BAEA-0F3BA36C5DE6.png" alt="Melting Point Chronicles Cover" className="about-cover" />
        <div className="about-text">
          <h1>Melting Point <span className="accent">Chronicles</span></h1>
          <div className="tagline">"Na PH school vibes — nothing else like am" 🔥</div>
          <p>
            A story-driven anime school RPG set in a Nigerian secondary school in Port Harcourt.
          </p>
          <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'0.75rem'}}>
            {['Open World RPG', 'Anime Style', 'Nigerian PH', 'Story-Driven', 'Mobile-First'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section-title mb-2">🎬 Full <span className="accent2">Cast</span></h2>
      <div className="cast-grid">
        {FULL_CAST.map(c => (
          <div key={c.name} className="cast-card">
            <img src={c.img} alt={c.name} className="cast-img" />
            <div className="cast-info" style={{padding:'0.9rem'}}>
              <h3>{c.name}</h3>
              <p>{c.role}</p>
              <span style={{fontSize:'0.6rem', padding:'0.1rem 0.4rem', borderRadius:'3px', fontWeight:700, background: c.tag === 'PLAYABLE' ? 'rgba(0,212,255,0.15)' : 'rgba(220,20,60,0.2)', color: c.tag === 'PLAYABLE' ? 'var(--aura)' : 'var(--scarlet)'}}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
