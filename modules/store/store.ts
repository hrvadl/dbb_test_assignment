import { configureStore } from '@reduxjs/toolkit'
import { config } from '../../lib/config'
import { HTTP } from '../../lib/request'
import { fileReducer } from './reducers/files'
import { uiReducer } from './reducers/ui'

const extraArgument = {
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkExtraArgument = typeof extraArgument
export type AsyncThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  extra: ThunkExtraArgument
}
