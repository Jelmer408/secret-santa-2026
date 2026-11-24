import { useState } from 'react'
import RosterIntro from './RosterIntro'
import BaubleWall from '../baubles/BaubleWall'
import { matchesName } from '../../lib/names'
import './RosterScreen.css'

const PICK_DELAY = 560

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function RosterScreen({ roster, onPick }) {
  const { event, members } = roster
  const [query, setQuery] = useState('')
  const [pickedId, setPickedId] = useState(null)
  const searching = query.trim() !== ''
  const matches = members.filter((m) => matchesName(m.name, query))

  const pick = (member) => {
    if (pickedId) return
    setPickedId(member.id)
    setTimeout(() => onPick(member), prefersReducedMotion() ? 0 : PICK_DELAY)
  }

  const stateOf = (member) => {
    if (pickedId) return member.id === pickedId ? 'picked' : 'dimmed'
    if (!searching) return 'idle'
    return matches.includes(member) ? 'match' : 'faded'
  }

  return (
    <section className="roster">
      <RosterIntro
        event={event}
        lit={members.filter((m) => m.joined).length}
        total={members.length}
        query={query}
        onQuery={setQuery}
        matches={matches.length}
        onSubmit={() => matches.length === 1 && pick(matches[0])}
      />
      <BaubleWall members={members} stateOf={stateOf} onPick={pick} />
    </section>
  )
}
