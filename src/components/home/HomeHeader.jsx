import { motion } from 'motion/react'
import RoughCircle from '../sketch/RoughCircle'
import HandLettering from '../sketch/HandLettering'
import BudgetTag from './BudgetTag'
import Countdown from './Countdown'
import { firstName } from '../../lib/names'
import { assetUrl } from '../../lib/assets'
import './HomeHeader.css'

export default function HomeHeader({ me, event, onSignOut }) {
  return (
    <header className="home-header">
      <div className="home-header__who">
        <motion.div
          className="home-header__avatar"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
        >
          {me.avatar_url && <img src={assetUrl(me.avatar_url)} alt="" />}
          <RoughCircle size={96} seed={88} strokeWidth={2.6} roughness={1.4} />
        </motion.div>
        <div>
          <h1 className="home-header__hello">
            <HandLettering text={`Ho ho ho, ${firstName(me.name)}!`} delay={0.15} />
          </h1>
          <button className="link-button" onClick={onSignOut}>not you? sign out</button>
        </div>
      </div>

      <div className="home-header__facts">
        <BudgetTag budget={event.budget} />
        <Countdown date={event.exchange_date} />
      </div>
    </header>
  )
}
