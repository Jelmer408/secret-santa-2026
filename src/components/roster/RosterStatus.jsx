export default function RosterStatus({ event, lit, total, query, matches }) {
  if (query.trim() && matches === 0) {
    return <>No elf called “{query.trim()}” on the tree. Try your first name?</>
  }
  if (event.drawn_at) return <>Names are drawn! Tap your bauble to unwrap your match.</>
  return <><strong>{lit} of {total}</strong> baubles lit so far</>
}
