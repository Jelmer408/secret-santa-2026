export const firstName = (name = '') => name.trim().split(/\s+/)[0]

export const joinNames = (names) => {
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} & ${names.at(-1)}`
}
