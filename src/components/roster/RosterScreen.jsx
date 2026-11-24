import { motion } from 'motion/react'
import TitleBlock from '../title/TitleBlock'
import Arrow from '../doodles/Arrow'
import Polaroid from './Polaroid'
import JoinedMeter from './JoinedMeter'
import './RosterScreen.css'

export default function RosterScreen({ roster, onPick }) {
  const { event, members } = roster
  const joined = members.filter((m) => m.joined).length

  return (
    <section className="roster">
      <TitleBlock event={event} />

      <div className="roster__prompt">
        <p className="roster__hint">Who are you? Find your face</p>
        <Arrow className="roster__arrow" delay={1.5} />
      </div>

      <JoinedMeter joined={joined} total={members.length} drawn={Boolean(event.drawn_at)} />

      <motion.ul
        className="roster__grid"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { delayChildren: 0.5, staggerChildren: 0.045 } } }}
      >
        {members.map((member) => (
          <li key={member.id}>
            <Polaroid member={member} onClick={() => onPick(member)} showStamp />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
