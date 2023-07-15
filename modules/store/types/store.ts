import { extraArgument, store } from '../store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkExtraArgument = typeof extraArgument
export type AsyncThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  extra: ThunkExtraArgument
}
