import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookSection = () => {
  const booksState = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <section>
      {booksState.map((books) => (
        <div key={`Book ${books.book.id}`} className="book-card">
          <div className="book-info">
            <h3 className="book-category">{books.book.category}</h3>
            <h2 className="book-title">{books.book.title}</h2>
            <h4 className="book-author">{books.book.author}</h4>
            <ul className="book-events">
              <button type="button">Comments</button>
              <button type="button" onClick={(e) => remove(e.target.id)} id={books.book.id}>
                Remove
              </button>
              <button type="button">Edit</button>
            </ul>
          </div>
          <div className="book-completion">
            <h2>
              64%
              <br />
              <span>Completed</span>
            </h2>
          </div>
          <div className="book-update">
            <h4>CURRENT CHAPTER</h4>
            <p>Chapter 17</p>
            <button className="btn" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BookSection;
