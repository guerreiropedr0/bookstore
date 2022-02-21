import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: store.getState().bookReducer.length,
      title: e.target[0].value,
      author: e.target[1].value,
      category: e.target[2].value,
    };

    dispatch(addBook(newBook));
  };
  return (
    <form onSubmit={(e) => submitBookToStore(e)} className="book-form" required>
      <label htmlFor="book">
        ADD NEW BOOK
        <br />
        <input type="text" id="book" placeholder="Book title" required />
      </label>
      <input type="text" id="author" placeholder="Book author" required />
      <select defaultValue="" name="categories" id="categories" required>
        <option value="" disabled>
          Category
        </option>
        <option value="education">Education and Teaching</option>
        <option value="history">History</option>
        <option value="entertainment">Humor and Entertainment</option>
        <option value="mystery">Mystery, Thriller and Suspense</option>
        <option value="romance">Romance</option>
        <option value="fantasy">Science Fiction and Fantasy</option>
      </select>
      <button className="btn" type="submit">
        ADD BOOK
      </button>
    </form>
  );
};
export default Form;
