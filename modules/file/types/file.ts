type FileLike = {
  '.tag': 'file' | 'folder'
  name: string
  path_lower: string
  path_display: string
  id: string
}

export type Folder = FileLike

export type File = FileLike & {
  client_modified: string
  server_modified: string
  rev: string
  size: number
  is_downloadable: boolean
  content_hash: string
}

export type AnyFile = Folder | File

export const isFile = (file: AnyFile): file is File => {
  return 'size' in file && 'is_downloadable' in file && file['.tag'] === 'file'
}
