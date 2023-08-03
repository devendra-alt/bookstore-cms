import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterByCategory, remove } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ book }) {
  const circularProgressBarStyle = buildStyles({
    strokeLinecap: 'butt',
    pathTransitionDuration: '2',
    pathColor: '#0290ff',
  });

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(remove(book.item_id));
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(book.category));
  };

  return (
    <li className="book-item">
      <div className="book-info roboto-slab">
        <Button
          className="book-category montserrat"
          clickEvent={handleCategoryClick}
          InnerText={book.category}
        />
        <h2 className="book-title">
          {' '}
          {book.title}
        </h2>
        <span>
          <Link className="action-link" to="/">
            {book.author}
          </Link>
        </span>
        <div className="action-links-btns">
          <nav>
            <button
              type="button"
              className="action-link action-link-btns-item"
              to="/"
            >
              Comments
            </button>
            <button
              type="button"
              className="action-link action-link-btns-item"
              onClick={handleRemove}
            >
              Remove
            </button>
            <button
              type="button"
              className="action-link action-link-btns-item"
              to="/"
            >
              Edit
            </button>
          </nav>
        </div>
      </div>
      <div className="completed-state montserrat">
        <div className="completed-state-figure">
          <CircularProgressbar
            value={book.completed ? book.completed : '7'}
            styles={circularProgressBarStyle}
          />
        </div>
        <div>
          <h4 className="completed-state-value">
            {book.completed ? book.completed : '7'}
            {' '}
            %
          </h4>
          <p className="completed-state-value-title">completed</p>
        </div>
      </div>
      <div className="chapter-info roboto-slab">
        <p className="current-chapter-title">current chapter</p>
        <p className="current-chapter-title-value">
          Chapter
          {' '}
          {book.currentChapter}
        </p>
        <button className="update-progress-btn" type="button">
          update progress
        </button>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.string,
    currentChapter: PropTypes.string,
  }).isRequired,
};

export default Book;
