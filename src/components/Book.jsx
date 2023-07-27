import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Book({ book }) {
  const circularProgressBarStyle = buildStyles({
    strokeLinecap: 'butt',
    pathTransitionDuration: '2',
    pathColor: '#0290ff',
  });
  return (
    <li className="book-item">
      <div className="book-info roboto-slab">
        <span className="book-category montserrat">{book.category}</span>
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
            <Link className="action-link action-link-btns-item" to="/">
              Comments
            </Link>
            <Link className="action-link action-link-btns-item" to="/">
              Remove
            </Link>
            <Link className="action-link action-link-btns-item" to="/">
              Edit
            </Link>
          </nav>
        </div>
      </div>
      <div className="completed-state montserrat">
        <div className="completed-state-figure">
          <CircularProgressbar
            value={book.completed}
            styles={circularProgressBarStyle}
          />
        </div>
        <div>
          <h4 className="completed-state-value">
            {book.completed}
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
  book: PropTypes.shape().isRequired,
};

export default Book;
