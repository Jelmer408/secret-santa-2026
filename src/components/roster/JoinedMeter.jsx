import SketchMeter from '../sketch/SketchMeter'
import './JoinedMeter.css'

export default function JoinedMeter({ joined, total, drawn }) {
  return (
    <div className="joined-meter">
      <p className="joined-meter__label">
        {drawn
          ? <>Names are drawn! <strong>Find your face</strong> to unwrap your match.</>
          : <><strong>{joined} of {total}</strong> elves have signed up</>}
      </p>
      {!drawn && <SketchMeter value={joined} max={total} label="People signed up" />}
    </div>
  )
}
