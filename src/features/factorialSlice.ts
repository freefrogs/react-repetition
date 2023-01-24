import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import type { factorialState } from '../types/factorial';

const initialState: factorialState = {
  history: [],
  factorialArr: [1, 1]
}

const factorialSlice = createSlice({
  name: 'factorial',
  initialState,
  reducers: {
    updateHistory: (state, action: PayloadAction<string>) => {
      state.history.unshift(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
    updateFactorialArr: (state, action: PayloadAction<number[]>) => {
      state.factorialArr = action.payload;
    }
  }
});

export const { updateHistory, clearHistory, updateFactorialArr } = factorialSlice.actions;

export const getFactorialHistory = (state: RootState) => state.factorial.history;
export const getFactorialArr = (state: RootState) => state.factorial.factorialArr;

export default factorialSlice.reducer;
