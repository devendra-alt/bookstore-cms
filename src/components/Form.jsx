import { useState } from 'react';

export default function Form() {
  const [state, setBook] = useState({
    title: '',
    author: '',
  });

  function handleChange(event) {
    setBook({
      ...state,
      [event.target.name]: event.target.value,
    });
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
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        className="add-book-form-input book-author-input"
      />
      <button type="submit" className="add-book-btn roboto-slab">
        Add Book
      </button>
    </form>
  );
}
