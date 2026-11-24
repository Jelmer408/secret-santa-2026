import Icon from '../icons/Icon'
import SketchBox from '../sketch/SketchBox'
import './RosterSearch.css'

export default function RosterSearch({ value, onChange, onSubmit, matches }) {
  const submit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <SketchBox as="form" role="search" className="roster-search" seed={1912} roughness={1.1} shadow={false} onSubmit={submit}>
      <Icon name="search" size={20} className="roster-search__icon" />
      <label className="visually-hidden" htmlFor="roster-search">Find your name</label>
      <input
        id="roster-search"
        className="roster-search__input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your name…"
        autoComplete="off"
        enterKeyHint="go"
      />
      {value && (
        <>
          <span className="roster-search__hint" aria-live="polite">
            {matches === 1 ? 'press enter' : `${matches} found`}
          </span>
          <button type="button" className="roster-search__clear" onClick={() => onChange('')} aria-label="Clear search">
            <Icon name="close" size={16} strokeWidth={2.4} />
          </button>
        </>
      )}
    </SketchBox>
  )
}
