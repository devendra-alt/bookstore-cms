import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';
import Button from './Button';

export default function Form() {
  const [state, setBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    event.preventDefault();
    setBook({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  const handleAddBook = (event) => {
    event.preventDefault();
    if (state.author && state.title) {
      const newBook = {
        item_id: uuidv4(),
        title: state.title,
        author: state.author,
        category: 'not-provided',
      };
      setBook({
        title: '',
        author: '',
      });
      dispatch(addNewBook(newBook));
    }
  };

  return (
    <form className="add-book-form montserrat">
      <h2 className="add-book-form-title">Add new Book</h2>
      <input
        type="text"
        value={state.title}
        name="title"
        onChange={handleChange}
        className="add-book-form-input book-title-input"
        required
      />
      <input
        type="text"
        value={state.author}
        name="author"
        onChange={handleChange}
        className="add-book-form-input book-author-input"
        required
      />
      <Button
        className="add-book-btn roboto-slab"
        clickEvent={handleAddBook}
        InnerText="Add Book"
      />
    </form>
  );
}
