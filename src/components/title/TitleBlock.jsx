import { motion } from 'motion/react'
import HandLettering from '../sketch/HandLettering'
import Star from '../doodles/Star'
import Holly from '../doodles/Holly'
import Scribble from '../doodles/Scribble'
import Tree from '../doodles/Tree'
import GiftBox from '../doodles/GiftBox'
import EventFacts from './EventFacts'
import './TitleBlock.css'

export default function TitleBlock({ event }) {
  return (
    <header className="title-block">
      <motion.div
        className="title-block__side title-block__side--left"
        initial={{ opacity: 0, x: -40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 120, damping: 14 }}
      >
        <Tree />
      </motion.div>
      <motion.div
        className="title-block__side title-block__side--right"
        initial={{ opacity: 0, x: 40, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 4 }}
        transition={{ delay: 0.75, type: 'spring', stiffness: 120, damping: 14 }}
      >
        <GiftBox className="title-block__gift title-block__gift--big" />
        <GiftBox className="title-block__gift title-block__gift--small" />
      </motion.div>

      <motion.p
        className="title-block__kicker"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {event.title} presents
      </motion.p>

      <h1 className="title-block__title">
        <motion.span
          className="title-block__star"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 260, damping: 12 }}
        >
          <Star />
        </motion.span>
        <HandLettering text="Secret Santa" delay={0.2} />
        <motion.span
          className="title-block__year"
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 8 }}
          transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 12 }}
        >
          2026
        </motion.span>
        <motion.span
          className="title-block__holly"
          initial={{ scale: 0, rotate: 40 }}
          animate={{ scale: 1, rotate: 14 }}
          transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 12 }}
        >
          <Holly />
        </motion.span>
      </h1>

      <Scribble className="title-block__scribble" />
      <EventFacts event={event} />
    </header>
  )
}
