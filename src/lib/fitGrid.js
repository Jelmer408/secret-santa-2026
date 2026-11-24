// Largest card width (between min and max) that lets `count` cards fit in the box.
// If nothing fits, returns the densest layout that still respects `min`.
export function fitGrid({ count, width, height, min, max, gapX, gapY, cardHeight }) {
  let densest = min
  for (let cols = 1; cols <= count; cols++) {
    const size = Math.min(max, Math.floor((width - (cols - 1) * gapX) / cols))
    if (size < min) break
    densest = size
    const rows = Math.ceil(count / cols)
    if (rows * cardHeight(size) + (rows - 1) * gapY <= height) return size
  }
  return densest
}
