import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import TitleBlock from '../title/TitleBlock'
import Arrow from '../doodles/Arrow'
import Polaroid from './Polaroid'
import JoinedMeter from './JoinedMeter'
import RosterSearch from './RosterSearch'
import { FACE_MAX, FACE_MIN, faceHeight, faceStyle } from './faceMetrics'
import { useFitGrid } from '../../hooks/useFitGrid'
import { matchesName } from '../../lib/names'
import './RosterScreen.css'

export default function RosterScreen({ roster, onPick }) {
  const { event, members } = roster
  const joined = members.filter((m) => m.joined).length
  const [query, setQuery] = useState('')
  const matches = members.filter((m) => matchesName(m.name, query))
  const gridRef = useRef(null)
  const face = useFitGrid(gridRef, { count: members.length, min: FACE_MIN, max: FACE_MAX, cardHeight: faceHeight })

  return (
    <section className="roster">
      <div className="roster__intro">
        <TitleBlock event={event} />

        <div className="roster__prompt">
          <p className="roster__hint">Who are you? Find your face</p>
          <Arrow className="roster__arrow" delay={1.5} />
        </div>

        <p className="roster__welcome">
          <span><strong>First time?</strong> Pick your face and choose a 4-digit PIN.</span>
          <span><strong>Back again?</strong> Same face, same PIN.</span>
        </p>

        <RosterSearch
          value={query}
          onChange={setQuery}
          matches={matches.length}
          onSubmit={() => matches.length === 1 && onPick(matches[0])}
        />

        <JoinedMeter joined={joined} total={members.length} drawn={Boolean(event.drawn_at)} />
      </div>

      <div className="roster__wall">
        <motion.ul
          ref={gridRef}
          className="roster__grid"
          style={faceStyle(face)}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { delayChildren: 0.5, staggerChildren: 0.045 } } }}
        >
          {members.map((member) => (
            <li key={member.id} hidden={!matches.includes(member)}>
              <Polaroid member={member} onClick={() => onPick(member)} showStamp />
            </li>
          ))}
        </motion.ul>

        {matches.length === 0 && (
          <p className="roster__none">No elf called “{query.trim()}” on the list. Try your first name?</p>
        )}
      </div>
    </section>
  )
}
