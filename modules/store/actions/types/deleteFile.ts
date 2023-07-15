import { AnyFile } from '@modules/file/types/file'

type DeleteFileSuccessResponse = {
  metadata: AnyFile
}

export type FailedResponse = {
  error: {
    '.tag': string
  }
  error_summary: string
}

export type DeleteFileResponse = FailedResponse | DeleteFileSuccessResponse

export const isSuccessfulDeleteResponse = (
  response: DeleteFileResponse
): response is DeleteFileSuccessResponse => {
  return response && typeof response === 'object' && 'metadata' in response
}
