import { HttpError } from './error'

export const request = async (
  URL: string,
  options?: RequestInit
): Promise<unknown> => {
  const result = await fetch(URL, {
    ...options,
    headers: { ...options?.headers, 'Content-Type': 'application/json' },
  })
  const json = result.json()

  if (result.ok) return json

  throw new HttpError('API call failed', result.status)
}
