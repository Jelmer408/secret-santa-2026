export const firstName = (name = '') => name.trim().split(/\s+/)[0]

const fold = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

export const matchesName = (name, query) => fold(name).includes(fold(query))

export const plural = (count, word, many = `${word}s`) => `${count} ${count === 1 ? word : many}`

export const joinNames = (names) => {
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} & ${names.at(-1)}`
}
