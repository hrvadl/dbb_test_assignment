import { goBack, goForward, useAppDispatch } from '@modules/store'
import { Folder } from '../types/file'

export const useChangePath = () => {
  const dispatch = useAppDispatch()

  const goBackHandler = () => {
    dispatch(goBack())
  }

  const goForwardHandler = (folder: Folder) => {
    dispatch(goForward(folder.path_lower))
  }

  return {
    goBackHandler,
    goForwardHandler,
  }
}
