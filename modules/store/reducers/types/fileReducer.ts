import { AnyFile } from '@modules/file'

type FilePath = {
  path: string
  prevPath: FilePath | null
}

export type FileReducerState = {
  files: AnyFile[]
  currentPath: FilePath
  error: string | null
  loading: boolean
}
