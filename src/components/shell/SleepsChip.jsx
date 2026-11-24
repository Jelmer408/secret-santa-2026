import Chip from '../common/Chip'
import { formatSwapDate, sleepsShort, sleepsUntil } from '../../lib/dates'

export default function SleepsChip({ date }) {
  return (
    <Chip icon="moon" className="sleeps-chip" title={`Gift swap on ${formatSwapDate(date)}`}>
      {sleepsShort(sleepsUntil(date))}
    </Chip>
  )
}
