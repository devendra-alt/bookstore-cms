import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => state.value.push(action.payload),
    remove: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload);
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
