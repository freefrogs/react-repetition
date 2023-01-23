import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import factorialReducer from '../features/factorialSlice';
import githubReducer from '../features/githubSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
