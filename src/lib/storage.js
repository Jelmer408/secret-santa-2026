import { EVENT_SLUG } from '../config'

const sessionKey = `secret-santa:${EVENT_SLUG}:session`
const revealKey = (memberId, drawnAt) => `secret-santa:${EVENT_SLUG}:revealed:${memberId}:${drawnAt}`

export const loadToken = () => localStorage.getItem(sessionKey)
export const saveToken = (token) => localStorage.setItem(sessionKey, token)
export const clearToken = () => localStorage.removeItem(sessionKey)

export const hasRevealed = (memberId, drawnAt) => localStorage.getItem(revealKey(memberId, drawnAt)) === '1'
export const markRevealed = (memberId, drawnAt) => localStorage.setItem(revealKey(memberId, drawnAt), '1')
export const forgetRevealed = (memberId, drawnAt) => localStorage.removeItem(revealKey(memberId, drawnAt))
