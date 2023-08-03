import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/booksSlice';

export default function Home() {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ul className="book-list">
        {books.map((book) => (
          <Book book={book} key={book.item_id} />
        ))}
      </ul>
      <Form />
    </>
  );
}
