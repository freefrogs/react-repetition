import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import factorialReducer from '../features/factorialSlice';
import githubReducer from '../features/githubSlice';

export const store = configureStore({
  reducer: {
    factorial: factorialReducer,
    github: githubReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
