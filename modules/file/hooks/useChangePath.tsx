import { useAppDispatch } from '../../store/hooks'
import { goBack, goForward } from '../../store/reducers/files'

export const useChangePath = () => {
  const dispatch = useAppDispatch()

  const goBackHandler = () => {
    dispatch(goBack())
  }

  const goForwardHandler = (path: string) => {
    dispatch(goForward(path))
  }

  return {
    goBackHandler,
    goForwardHandler,
  }
}
