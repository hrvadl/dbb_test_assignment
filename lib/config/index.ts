import { REACT_APP_DROPBOX_API, REACT_APP_DROPBOX_TOKEN } from '@env'

export const config = {
  baseURL: REACT_APP_DROPBOX_API ?? '',
  token: REACT_APP_DROPBOX_TOKEN ?? '',
}
