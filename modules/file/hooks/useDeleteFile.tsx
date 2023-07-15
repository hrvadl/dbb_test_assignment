import { deleteFile, useAppDispatch } from '@modules/store'

export const useDeleteFile = () => {
  const dispatch = useAppDispatch()

  const deleteFileHandler = (path: string) => {
    dispatch(deleteFile(path))
  }

  return { deleteFileHandler }
}
