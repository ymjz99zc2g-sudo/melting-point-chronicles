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

      <h2 className="section-title mb-3">Development <span className="accent">Timeline</span></h2>
      <div className="roadmap-timeline">
        <div className="timeline-item">
          <div className="timeline-dot done" />
          <div className="timeline-label done">✅ DONE</div>
          <div className="timeline-title">Phase 1 — Web Prototype Launch</div>
          <div className="timeline-desc">
            Full website with landing page, character selection, playable game prototype, gallery, guide, and roadmap.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot active" />
          <div className="timeline-label active">🔧 IN PROGRESS</div>
          <div className="timeline-title">Phase 2 — Full Story Chapters (Web)</div>
          <div className="timeline-desc">
            Implementing all 7 chapters + final boss battle. Proper quest system with branching choices.
          </div>
        </div>
      </div>
    </div>
  )
}
