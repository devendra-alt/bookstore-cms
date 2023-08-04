import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QCdnPL3vrJyR2h0omuy5/books';

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

export const addNewBook = createAsyncThunk('books/addNewBook', async (data) => {
  try {
    const response = await axios.post(API_ENDPOINT, data);
    return [response.data, data];
  } catch (error) {
    throw Error(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (data) => {
  try {
    const response = await axios.delete(`${API_ENDPOINT}/${data}`);
    return [response.data, data];
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  value: [],
  loading: 'idle',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.value = state.value.filter((book) => book.category === category);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = 'succeded';
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = 'failed';
      })
      .addCase(addNewBook.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.value.push(action.payload[1]);
        state.loading = 'succeded';
      })
      .addCase(addNewBook.rejected, (state) => {
        state.loading = 'failed';
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemId = action.payload[1];
        state.value = state.value.filter((item) => item.item_id !== itemId);
        state.loading = 'succeded';
      })
      .addCase(removeBook.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const { filterByCategory } = booksSlice.actions;

export default booksSlice.reducer;
