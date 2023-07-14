import { createAsyncThunk } from '@reduxjs/toolkit'
import { AnyFile } from '../../file/types/file'
import type { AsyncThunkConfig } from '../store'

export const FILES_PREFIX = 'files'

export const filesActions = {
  GetAllFiles: `${FILES_PREFIX}/getAll`,
} as const

type GetFilesAPIResponse = {
  entries: AnyFile[]
}

const getAllURL = (baseURL: string) => `${baseURL}/files/list_folder`

const isAPIResponse = (res: unknown): res is GetFilesAPIResponse => {
  return !!(res && typeof res === 'object' && 'entries' in res && res.entries)
}

export const getAllFiles = createAsyncThunk<
  AnyFile[],
  string | undefined,
  AsyncThunkConfig
>(filesActions.GetAllFiles, async (path = '', { extra }) => {
  const { HTTP, config } = extra

  const response = await HTTP.post(getAllURL(config.baseURL), {
    headers: { authorization: `Bearer ${config.token}` },
    body: JSON.stringify({ path }),
  })

  if (!isAPIResponse(response)) {
    throw new Error('Error getting all files')
  }

  return response.entries
})
