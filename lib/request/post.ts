import { request } from './base'

export const post = (URL: string, options: RequestInit) => {
  return request(URL, { ...options, method: 'POST' })
}
