import { config } from '@lib/config'
import { HTTP } from '@lib/request'
import { configureStore } from '@reduxjs/toolkit'
import { fileReducer } from './reducers/files'
import { uiReducer } from './reducers/ui'

export const extraArgument = {
  HTTP,
  config,
}

export const store = configureStore({
  reducer: {
    file: fileReducer.reducer,
    ui: uiReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }),
})
