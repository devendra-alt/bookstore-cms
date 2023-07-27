import Header from './Header';
import Book from './Book';
import Form from './Form';

export default function Home() {
  const books = [
    {
      title: "The Handmaid's Tale",
      author: 'Suzanne Collins',
      category: 'Fiction',
      completed: 81,
      currentChapter: 17,
    },
    {
      title: 'Great Expectations',
      author: 'Suzanne Collins',
      category: 'Classics',
      completed: 71,
      currentChapter: 12,
    },
  ];

  return (
    <>
      <Header />
      <ul className="book-list">
        {books.map((book) => (
          <Book book={book} key={book.title} />
        ))}
      </ul>
      <Form />
    </>
  );
}
