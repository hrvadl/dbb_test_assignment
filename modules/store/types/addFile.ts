import { AnyFile } from '../../file/types/file'
import { FailedResponse } from './deleteFile'

type GetFileSuccessResponse = {
  entries: AnyFile[]
}

export type GetFilesResponse = GetFileSuccessResponse | FailedResponse

export const isSuccessfulGetFilesResponse = (
  response: GetFilesResponse
): response is GetFileSuccessResponse => {
  return !!(
    response &&
    typeof response === 'object' &&
    'entries' in response &&
    response.entries
  )
}
