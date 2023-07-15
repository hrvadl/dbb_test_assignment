export const BYTES = 1
export const KILOBYTES = 1000 * BYTES
export const MEGABYTES = 1000 * KILOBYTES

export const toMegabytes = (bytes: number) => {
  return (bytes / MEGABYTES).toFixed(2)
}
