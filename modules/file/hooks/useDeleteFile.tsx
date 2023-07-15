import { deleteFile } from '../../store/actions/file'
import { useAppDispatch } from '../../store/hooks'

export const useDeleteFile = () => {
  const dispatch = useAppDispatch()

  const deleteFileHandler = (path: string) => {
    dispatch(deleteFile(path))
  }

  return { deleteFileHandler }
}
