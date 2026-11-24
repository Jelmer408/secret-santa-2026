import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SketchBox from '../sketch/SketchBox'
import DrawControls from './DrawControls'
import EventSettings from './EventSettings'
import MemberManager from './MemberManager'
import './AdminPanel.css'

export default function AdminPanel({ token, roster, onRosterChange, onDrawChanged }) {
  const [open, setOpen] = useState(false)

  return (
    <SketchBox className="admin-panel" fill="#f7f1e3" seed={4242}>
      <button className="admin-panel__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="admin-panel__title">Elf HQ</span>
        <span className="admin-panel__badge">head elf only</span>
        <motion.span className="admin-panel__chevron" animate={{ rotate: open ? 180 : 0 }}>▾</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="admin-panel__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="admin-panel__sections">
              <DrawControls token={token} roster={roster} onRosterChange={onRosterChange} onDrawChanged={onDrawChanged} />
              <EventSettings token={token} event={roster.event} onRosterChange={onRosterChange} />
              <MemberManager token={token} members={roster.members} onRosterChange={onRosterChange} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SketchBox>
  )
}
