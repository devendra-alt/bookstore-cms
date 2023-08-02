import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      let newBook = action.payload;
      state.value.push(newBook);
    },
    remove: (state, action) => {
      let id = action.payload;
      state.value = state.value.filter((book) => book.item_id !== id);
    },
    filterByCategory: (state, action) => {
      let category = action.payload;
      state.value = state.value.filter((book) => book.category === category);
    },
  },
});

export const { add, remove, filterByCategory } = booksSlice.actions;

export default booksSlice.reducer;
