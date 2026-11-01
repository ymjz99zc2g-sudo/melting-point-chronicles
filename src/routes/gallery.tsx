import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

const GALLERY = [
  {
    id: 'cover',
    src: 'https://i.postimg.cc/d0J3BpQc/F0632B6A-A5D4-47E7-BAEA-0F3BA36C5DE6.png',
    name: '🎮 Game Cover — Everyone Together',
    cover: true,
  },
  {
    id: 'michael',
    src: 'https://i.postimg.cc/bJ8tnR3m/845BD746-76E6-4F13-B77C-5C3EE2CFBBD5.png',
    name: 'Michael — Protagonist',
  },
  {
    id: 'ifeoma',
    src: 'https://i.postimg.cc/sXyhWJwn/C7B761B7-8326-4CF2-B7CA-6C2E82E9ADA0.png',
    name: 'Ifeoma — Sports Queen',
  },
  {
    id: 'amara',
    src: 'https://i.postimg.cc/hjgdm0pM/B981C9E2-C0D4-4845-87DF-589A9A15A5AC.png',
    name: 'Amara — Mystery Girl',
  },
  {
    id: 'trevor',
    src: 'https://i.postimg.cc/B6sKFCMp/D60FC427-A35A-43B6-A90B-2DB5D2788983.png',
    name: 'Trevor — Tech Genius',
  },
  {
    id: 'david',
    src: 'https://i.postimg.cc/6QBq0g6s/EFA2B168-07B3-48E2-8F3B-A4E48075DD8E.png',
    name: 'David — Football Captain',
  },
  {
    id: 'mike',
    src: 'https://i.postimg.cc/V6RbWbhw/92709A66-64C7-46A9-A637-6A0B8343861C.png',
    name: 'Mike — Mischievous Twin',
  },
  {
    id: 'gabriel',
    src: 'https://i.postimg.cc/ZqjRDHn7/16BFC1AA-843A-417A-8B85-34B2CF3FDD8F.png',
    name: 'Gabriel — Calm Twin',
  },
  {
    id: 'isi',
    src: 'https://i.postimg.cc/hGKvr6Dk/9212B908-242F-42A7-A0BD-6B005BE6DF5D.png',
    name: 'Isi Owu — Final Boss',
  },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="section">
      <span className="hero-badge" style={{display:'inline-block', marginBottom:'1rem'}}>
        Character Art + Game Cover
      </span>
      <h1 className="section-title">🖼️ Character <span className="accent2">Gallery</span></h1>
      <p className="section-sub">
        The full cast of Melting Point Chronicles — from Michael to Isi Owu. All anime-style renders.
      </p>

      <div className="gallery-grid">
        {GALLERY.map(item => (
          <div
            key={item.id}
            className={`gallery-item ${item.cover ? 'cover-item' : ''}`}
            onClick={() => setLightbox(item.src)}
          >
            <img
              src={item.src}
              alt={item.name}
              style={item.cover ? { aspectRatio:'16/9', objectFit:'cover', width:'100%' } : { aspectRatio:'3/4', objectFit:'cover', objectPosition:'top', width:'100%' }}
            />
            <div className="gallery-caption">{item.name}</div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Character preview" />
        </div>
      )}
    </div>
  )
}
