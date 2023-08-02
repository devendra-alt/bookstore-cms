import Header from './Header';
import Book from './Book';
import Form from './Form';
import { useSelector } from 'react-redux';

export default function Home() {
  const books = useSelector((state) => state.books.value);
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
