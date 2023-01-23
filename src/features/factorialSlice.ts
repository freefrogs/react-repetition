import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import type { factorialState } from '../types/factorial';

const initialState: factorialState = {
  history: []
}

const factorialSlice = createSlice({
  name: 'factorial',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<string>) => {
      state.history.unshift(action.payload)
    },
    clearHistory: (state) => {
      state.history = [];
    }
  }
});

export const { addResult, clearHistory } = factorialSlice.actions;

export const getFactorialHistory = (state: RootState) => state.factorial.history;

export default factorialSlice.reducer;
