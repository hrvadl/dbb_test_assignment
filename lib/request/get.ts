import { request } from './base'

export const get = (URL: string, options?: RequestInit) => {
  return request(URL, { ...options, method: 'GET' })
}
