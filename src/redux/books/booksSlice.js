import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QCdnPL3vrJyR2h0omuy5/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  } catch (error) {
    throw Error(error);
  }
});


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

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const newBook = action.payload;
      state.value.push(newBook);
    },
    remove: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((book) => book.item_id !== id);
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.value = state.value.filter((book) => book.category === category);
    },
  },
});

export const { add, remove, filterByCategory } = booksSlice.actions;

export default booksSlice.reducer;
