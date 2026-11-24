import { motion } from 'motion/react'
import Sparkle from '../doodles/Sparkle'
import { formatSwapDate, sleepsLabel, sleepsUntil } from '../../lib/dates'
import './EventFacts.css'

export default function EventFacts({ event }) {
  const facts = [
    { label: `${event.budget} budget`, color: 'var(--gold)' },
    { label: `swap on ${formatSwapDate(event.exchange_date)}`, color: 'var(--berry)' },
    { label: sleepsLabel(sleepsUntil(event.exchange_date)), color: 'var(--pine-soft)' },
  ]

  return (
    <ul className="event-facts">
      {facts.map((fact, i) => (
        <motion.li
          key={fact.label}
          className="event-facts__item"
          initial={{ opacity: 0, y: 12, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
          transition={{ delay: 1.2 + i * 0.12, type: 'spring', stiffness: 300, damping: 18 }}
        >
          <Sparkle className="event-facts__sparkle" color={fact.color} />
          {fact.label}
        </motion.li>
      ))}
    </ul>
  )
}
