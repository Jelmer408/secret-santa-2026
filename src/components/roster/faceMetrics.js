// Mirrors Polaroid.css: 11px frame padding, two-line name with 1rem of padding.
const FULL_SIZE = 186
const FRAME = 11
const NAME_PADDING = 16

export const FACE_MIN = 100
export const FACE_MAX = FULL_SIZE

const nameSize = (face) => Math.min(24, Math.max(16, face * 0.125))

export const faceHeight = (face) => face - FRAME + nameSize(face) * 2.04 + NAME_PADDING

export const faceStyle = (face) => ({
  '--face': `${face}px`,
  '--face-name': `${nameSize(face)}px`,
  '--face-stamp': Math.min(1, Math.max(0.68, face / FULL_SIZE)).toFixed(2),
})
