import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AnyFile } from '../../file/types/file'
import { FILES_PREFIX, getAllFiles } from '../actions/actions'

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
    builder.addCase(getAllFiles.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      state.files = action.payload
      state.error = null
      state.loading = false
    })

    builder.addCase(getAllFiles.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Failed to fetch the files'
    })
  },
})

export const { goBack, goForward } = fileReducer.actions
