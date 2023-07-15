import { getAllFiles, useAppDispatch, useAppSelector } from '@modules/store'
import { useEffect } from 'react'

export const useFiles = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.file)

  useEffect(() => {
    dispatch(getAllFiles(state.currentPath.path))
  }, [state.currentPath.path])

  return { state }
}
