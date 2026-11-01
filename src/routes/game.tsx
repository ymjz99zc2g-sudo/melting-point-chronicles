import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game')({
  component: GamePage,
})

const TILE = 32
const SPEED = 2.5
const SPRINT_MULTIPLIER = 1.8
const MAP_W = 30
const MAP_H = 22

const MAP: number[][] = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

const LOCATIONS = [
  { x: 14, y: 1, name: 'Melting Point College', color: '#ffd700' },
  { x: 4, y: 4, name: 'Classroom Block A' },
  { x: 13, y: 4, name: 'Library' },
  { x: 21, y: 4, name: 'Computer Lab' },
  { x: 4, y: 13, name: 'Football Field' },
  { x: 23, y: 13, name: 'Cafeteria' },
  { x: 14, y: 19, name: 'Assembly Ground', color: '#ffd700' },
]

interface NPC {
  id: string
  name: string
  x: number
  y: number
  color: string
  dialogues: string[][]
}

const NPCS: NPC[] = [
  {
    id: 'ifeoma',
    name: 'Ifeoma',
    x: 8,
    y: 12,
    color: '#f6c94c',
    dialogues: [['Ifeoma', 'Michael! Wetin dey happen?'], ['Ifeoma', 'Make we race! I tell you I be Ifeoma!'], ['Michael', 'Aura don finish o! But I go try.']],
  },
  {
    id: 'trevor',
    name: 'Trevor',
    x: 22,
    y: 5,
    color: '#87c3ee',
    dialogues: [['Trevor', 'Guy! You be Michael right? I get one coding puzzle for you!'], ['Trevor', 'Sharp guy! See if aura > 50 then activate!']],
  },
  {
    id: 'amara',
    name: 'Amara',
    x: 15,
    y: 5,
    color: '#9b59b6',
    dialogues: [['Amara', 'School get secret wey nobody know.'], ['Michael', 'Wetin you mean by that?'], ['Amara', '2am library... some things better make you no know.']],
  },
  {
    id: 'isi_owu',
    name: 'Isi Owu',
    x: 14,
    y: 10,
    color: '#dc143c',
    dialogues: [['Isi Owu', 'MICHAEL! WHERE YOUR ASSIGNMENT?!'], ['Isi Owu', 'SILENCE! WAEC Guardian form — ACTIVATE!']],
  },
]

const TOASTS = ['Aura XP gained!', 'Explored classroom block!', 'Quest update: Talk to Trevor', 'Reputation +1!', 'New area discovered!']

interface DialogueState {
  lines: string[][]
  idx: number
  active: boolean
}

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef<GameHud>({
    x: 14 * TILE,
    y: 8 * TILE,
    aura: 30,
    maxAura: 100,
    hp: 100,
    maxHp: 100,
    auraLevel: 0,
    xp: 0,
    sprinting: false,
    location: 'Melting Point College',
  })
  const keysRef = useRef<Set<string>>(new Set())
  const pressedRef = useRef<Set<string>>(new Set())
  const [hud, setHud] = useState<GameHud>({ ...stateRef.current })
  const [dialogue, setDialogue] = useState<DialogueState>({ lines: [], idx: 0, active: false })
  const [toast, setToast] = useState('')

  const showToast = (msg: string) => {
    setToast(msg)
    window.clearTimeout((showToast as any)._timer)
    ;(showToast as any)._timer = window.setTimeout(() => setToast(''), 2000)
  }

  const findNearbyNPC = () => {
    const s = stateRef.current
    const px = s.x / TILE
    const py = s.y / TILE
    for (const npc of NPCS) {
      const dist = Math.abs(npc.x - px) + Math.abs(npc.y - py)
      if (dist < 2.2) return npc
    }
    return null
  }

  const interact = () => {
    if (dialogue.active) {
      const next = dialogue.idx + 1
      if (next >= dialogue.lines.length) {
        setDialogue({ lines: [], idx: 0, active: false })
        const s = stateRef.current
        s.aura = Math.min(s.maxAura, s.aura + 8)
        s.xp += 10
        setHud({ ...s })
        showToast(TOASTS[Math.floor(Math.random() * TOASTS.length)])
        return
      }
      setDialogue({ ...dialogue, idx: next })
      return
    }

    const npc = findNearbyNPC()
    if (!npc) {
      showToast('No one nearby to talk to.')
      return
    }

    const lines = npc.dialogues
    setDialogue({ lines, idx: 0, active: true })
    showToast(`${npc.name} is speaking...`)
  }

  const activateAura = () => {
    const s = stateRef.current
    if (s.aura >= 20) {
      s.aura = Math.max(0, s.aura - 20)
      s.auraLevel = Math.min(5, s.auraLevel + 1)
      showToast(`AURA ACTIVATED! Level ${s.auraLevel}`)
      setHud({ ...s })
    } else {
      showToast('Aura don finish o! Rest small.')
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() ?? { width: 900, height: 520 }
      canvas.width = rect.width
      canvas.height = Math.min(520, window.innerHeight * 0.6)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', 'e', ' ', 'shift'].includes(key)) {
        e.preventDefault()
      }
      keysRef.current.add(key)
      if (key === 'e' || key === ' ') {
        if (!pressedRef.current.has(key)) {
          pressedRef.current.add(key)
          interact()
        }
      }
      if (key === 'shift') {
        stateRef.current.sprinting = true
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      keysRef.current.delete(key)
      pressedRef.current.delete(key)
      if (key === 'shift') {
        stateRef.current.sprinting = false
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const loop = () => {
      const s = stateRef.current
      const keys = keysRef.current
      const moveX = Number(keys.has('arrowright') || keys.has('d')) - Number(keys.has('arrowleft') || keys.has('a'))
      const moveY = Number(keys.has('arrowdown') || keys.has('s')) - Number(keys.has('arrowup') || keys.has('w'))
      const sprint = s.sprinting || keys.has('shift')
      const step = SPEED * (sprint ? SPRINT_MULTIPLIER : 1)

      const nx = s.x + moveX * step
      const ny = s.y + moveY * step
      const nextX = Math.max(TILE, Math.min(nx, MAP_W * TILE - TILE))
      const nextY = Math.max(TILE, Math.min(ny, MAP_H * TILE - TILE))
      const gridX = Math.floor(nextX / TILE)
      const gridY = Math.floor(nextY / TILE)

      if (MAP[gridY]?.[gridX] !== 1) {
        s.x = nextX
        s.y = nextY
      }

      const loc = LOCATIONS.find(item => Math.abs(item.x - Math.floor(s.x / TILE)) < 2 && Math.abs(item.y - Math.floor(s.y / TILE)) < 2)
      if (loc) s.location = loc.name

      setHud({ ...s })

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#120d24'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const offsetX = Math.max(0, Math.min(s.x - canvas.width / 2 + TILE / 2, MAP_W * TILE - canvas.width))
      const offsetY = Math.max(0, Math.min(s.y - canvas.height / 2 + TILE / 2, MAP_H * TILE - canvas.height))

      for (let y = 0; y < MAP_H; y++) {
        for (let x = 0; x < MAP_W; x++) {
          const tile = MAP[y][x]
          const drawX = x * TILE - offsetX
          const drawY = y * TILE - offsetY
          if (tile === 1) {
            ctx.fillStyle = '#1a1030'
            ctx.fillRect(drawX, drawY, TILE, TILE)
            ctx.strokeStyle = '#2d1b3d'
            ctx.strokeRect(drawX, drawY, TILE, TILE)
          } else {
            ctx.fillStyle = '#0f172a'
            ctx.fillRect(drawX, drawY, TILE, TILE)
          }
        }
      }

      for (const npc of NPCS) {
        const px = npc.x * TILE - offsetX
        const py = npc.y * TILE - offsetY
        ctx.fillStyle = npc.color
        ctx.fillRect(px, py, TILE, TILE)
        ctx.fillStyle = '#fff'
        ctx.font = '12px sans-serif'
        ctx.fillText(npc.name, px, py - 6)
      }

      ctx.fillStyle = '#00d4ff'
      ctx.fillRect(s.x - offsetX, s.y - offsetY, TILE, TILE)

      ctx.fillStyle = '#ffffff'
      ctx.font = '14px sans-serif'
      ctx.fillText('Michael', s.x - offsetX, s.y - offsetY - 8)

      ctx.fillStyle = 'rgba(255,255,255,0.15)'
      ctx.fillRect(16, 16, 220, 70)
      ctx.fillStyle = '#fff'
      ctx.fillText(`HP ${s.hp}/${s.maxHp}`, 28, 42)
      ctx.fillText(`Aura ${s.aura}/${s.maxAura}`, 28, 62)
      ctx.fillText(`Location: ${s.location}`, 28, 82)

      requestAnimationFrame(loop)
    }

    const raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="section" style={{paddingTop:'1rem'}}>
      <div className="hero-badge" style={{display:'inline-block', marginBottom:'1rem'}}>School Adventure Prototype</div>
      <h1 className="section-title">🎮 Play <span className="accent">Melting Point</span></h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:'0.75rem', marginBottom:'1rem'}}>
        <button className="btn-primary" onClick={activateAura}>⚡ Activate Aura</button>
        <button className="btn-secondary" onClick={interact}>💬 Talk / Interact</button>
      </div>

      <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'minmax(0, 1fr)', marginBottom:'1.5rem'}}>
        <div style={{background:'rgba(18,13,36,0.8)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden'}}>
          <canvas ref={canvasRef} style={{display:'block', width:'100%', height:'520px', background:'#120d24'}} />
        </div>
      </div>

      <div style={{display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'1rem'}}>
        <div style={{background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'12px', padding:'0.75rem 1rem'}}>
          <strong>HP:</strong> {hud.hp}/{hud.maxHp}
        </div>
        <div style={{background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'12px', padding:'0.75rem 1rem'}}>
          <strong>Aura:</strong> {hud.aura}/{hud.maxAura}
        </div>
        <div style={{background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'12px', padding:'0.75rem 1rem'}}>
          <strong>XP:</strong> {hud.xp}
        </div>
        <div style={{background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'12px', padding:'0.75rem 1rem'}}>
          <strong>Location:</strong> {hud.location}
        </div>
      </div>

      {dialogue.active && (
        <div style={{background:'var(--bg-card2)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1rem', marginBottom:'1rem'}}>
          <div style={{color:'var(--accent)', fontWeight:700, marginBottom:'0.5rem'}}>{dialogue.lines[dialogue.idx]?.[0]}</div>
          <div style={{color:'var(--text-dim)'}}>{dialogue.lines[dialogue.idx]?.[1]}</div>
        </div>
      )}

      {toast && (
        <div style={{background:'rgba(0,212,255,0.12)', border:'1px solid rgba(0,212,255,0.2)', color:'var(--aura)', borderRadius:'999px', padding:'0.6rem 1rem', display:'inline-block'}}>
          {toast}
        </div>
      )}
    </div>
  )
}
