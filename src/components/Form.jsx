import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../redux/books/booksSlice';

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

  function handleAddBook(event) {
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
      dispatch(add(newBook));
    }
  }

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
        name="author"
        onChange={handleChange}
        className="add-book-form-input book-author-input"
        required
      />
      <button
        type="submit"
        className="add-book-btn roboto-slab"
        onClick={handleAddBook}
      >
        Add Book
      </button>
    </form>
  );
}
