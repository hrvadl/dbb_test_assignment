import { AnyFile } from '@modules/file'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '../types/store'
import { GetFilesResponse, isSuccessfulGetFilesResponse } from './types/addFile'
import {
  DeleteFileResponse,
  isSuccessfulDeleteResponse,
} from './types/deleteFile'

export const FILES_PREFIX = 'files'

export const filesActions = {
  GetAllFiles: `${FILES_PREFIX}/getAll`,
  DeleteFile: `${FILES_PREFIX}/delete`,
} as const

const getAllURL = (baseURL: string) => `${baseURL}/files/list_folder`
const deleteFileURL = (baseURL: string) => `${baseURL}/files/delete_v2`

export const getAllFiles = createAsyncThunk<
  AnyFile[],
  string | undefined,
  AsyncThunkConfig
>(filesActions.GetAllFiles, async (path = '', { extra }) => {
  const { HTTP, config } = extra

  const response = (await HTTP.post(getAllURL(config.baseURL), {
    headers: { authorization: `Bearer ${config.token}` },
    body: JSON.stringify({ path }),
  })) as GetFilesResponse

  if (!isSuccessfulGetFilesResponse(response)) {
    throw new Error('Error getting all files')
  }

  return response.entries
})

export const deleteFile = createAsyncThunk<AnyFile, string, AsyncThunkConfig>(
  filesActions.DeleteFile,
  async (path: string, { extra }) => {
    const { HTTP, config } = extra

    const response = (await HTTP.post(deleteFileURL(config.baseURL), {
      headers: { authorization: `Bearer ${config.token}` },
      body: JSON.stringify({ path }),
    })) as DeleteFileResponse

    if (!isSuccessfulDeleteResponse(response)) {
      throw new Error('Error deleting file')
    }

    return response.metadata
  }
)
