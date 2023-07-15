import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { AnyFile } from '../../file/types/file'
import { FILES_PREFIX, deleteFile, getAllFiles } from '../actions/file'

type FilePath = {
  path: string
  prevPath: FilePath | null
}

type State = {
  files: AnyFile[]
  currentPath: FilePath
  error: string | null
  loading: boolean
}

const state = {
  files: [],
  currentPath: { path: '', prevPath: null },
  error: null,
  loading: true,
} as State

export const fileReducer = createSlice({
  name: FILES_PREFIX,
  initialState: state,
  reducers: {
    goForward: (state, action: PayloadAction<string>) => {
      const newPrev = state.currentPath
      state.currentPath = { path: action.payload, prevPath: newPrev }
    },
    goBack: (state) => {
      const newCurrent = state.currentPath.prevPath

      if (!newCurrent) {
        return
      }

      state.currentPath = newCurrent
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      state.files = action.payload
      state.loading = false
    })

    builder.addCase(getAllFiles.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Failed to fetch the files'
    })

    builder.addCase(deleteFile.rejected, (state) => {
      state.loading = false
    })

    builder.addCase(deleteFile.fulfilled, (state, action) => {
      state.files = state.files.filter((file) => file.id != action.payload.id)
      state.loading = false
    })

    builder.addMatcher(
      isAnyOf(getAllFiles.pending, deleteFile.pending),
      (state) => {
        state.error = null
        state.loading = true
      }
    )
  },
})

export const { goBack, goForward } = fileReducer.actions
