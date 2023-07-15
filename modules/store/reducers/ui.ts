import { createSlice } from '@reduxjs/toolkit'
import { deleteFile } from '../actions/file'
import { UiReducerState } from './types/uiReducer'

export const UI_PREFIX = 'ui'

const state = {
  snackBarMessage: null,
} as UiReducerState

export const uiReducer = createSlice({
  name: UI_PREFIX,
  initialState: state,
  reducers: {
    hideMessage: (state) => {
      state.snackBarMessage = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteFile.rejected, (state, action) => {
      state.snackBarMessage =
        action.error.message ?? 'Failed to delete file/folder'
    })
  },
})

export const { hideMessage } = uiReducer.actions
