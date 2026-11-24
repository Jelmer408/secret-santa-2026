import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SketchBox from '../sketch/SketchBox'
import WaitingCard from './WaitingCard'
import MissedDrawCard from './MissedDrawCard'
import GiftReveal from './GiftReveal'
import TargetCard from './TargetCard'
import { forgetRevealed, hasRevealed, markRevealed } from '../../lib/storage'
import './MissionCard.css'

export default function MissionCard({ me, event, target, roster }) {
  const drawnAt = event.drawn_at
  const [revealState, setRevealState] = useState(() => ({
    drawnAt,
    revealed: drawnAt ? hasRevealed(me.id, drawnAt) : false,
    celebrate: false,
  }))

  const current = revealState.drawnAt === drawnAt
    ? revealState
    : { drawnAt, revealed: drawnAt ? hasRevealed(me.id, drawnAt) : false, celebrate: false }

  const reveal = () => {
    markRevealed(me.id, drawnAt)
    setRevealState({ drawnAt, revealed: true, celebrate: true })
  }

  const replay = () => {
    forgetRevealed(me.id, drawnAt)
    setRevealState({ drawnAt, revealed: false, celebrate: false })
  }

  let view = 'waiting'
  if (drawnAt && !target) view = 'missed'
  else if (drawnAt && target) view = current.revealed ? 'target' : 'gift'

  return (
    <SketchBox className="mission-card" seed={1225}>
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
        >
          {view === 'waiting' && <WaitingCard roster={roster} />}
          {view === 'missed' && <MissedDrawCard />}
          {view === 'gift' && <GiftReveal onOpened={reveal} />}
          {view === 'target' && <TargetCard target={target} celebrate={current.celebrate} onReplay={replay} />}
        </motion.div>
      </AnimatePresence>
    </SketchBox>
  )
}
