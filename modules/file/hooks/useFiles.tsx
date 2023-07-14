import { useEffect } from 'react'
import { getAllFiles } from '../../store/actions/actions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export const useFiles = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.file)

  useEffect(() => {
    dispatch(getAllFiles(state.currentPath.path))
  }, [state.currentPath.path])

  return { state }
}
