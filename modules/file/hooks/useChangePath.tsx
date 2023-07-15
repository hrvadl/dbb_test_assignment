import { goBack, goForward, useAppDispatch } from '@modules/store'

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
