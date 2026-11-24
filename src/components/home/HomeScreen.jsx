import HomeHeader from './HomeHeader'
import MissionCard from './MissionCard'
import WishEditor from '../wishes/WishEditor'
import AdminPanel from '../admin/AdminPanel'
import './HomeScreen.css'

export default function HomeScreen({ session, roster, onRosterChange, onSignOut }) {
  const { me, event, wishes, target } = session.data

  return (
    <section className="home">
      <HomeHeader me={me} event={event} onSignOut={onSignOut} />

      <div className="home__grid">
        <MissionCard me={me} event={event} target={target} roster={roster} />
        <WishEditor token={session.token} wishes={wishes} onChange={session.setWishes} />
      </div>

      {me.is_admin && roster && (
        <AdminPanel
          token={session.token}
          roster={roster}
          onRosterChange={onRosterChange}
          onDrawChanged={session.refresh}
        />
      )}
    </section>
  )
}
