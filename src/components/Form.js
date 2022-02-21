import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Form = () => {
  const [form, setForm] = useState({
    inputTitle: '',
    inputAuthor: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
    });
  };

  const handleAuthorChange = (e) => {
    setForm({
      ...form,
      inputAuthor: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: store.getState().bookReducer.length,
      title: form.inputTitle,
      author: form.inputAuthor,
      category: form.selectedText,
    };

    dispatch(addBook(newBook));
  };
  return (
    <form onSubmit={(e) => submitBookToStore(e)} className="book-form" required>
      <label htmlFor="book">
        ADD NEW BOOK
        <br />
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.inputTitle}
          onChange={handleTitleChange}
          required
        />
      </label>
      <input
        type="text"
        id="author"
        placeholder="Book author"
        value={form.inputAuthor}
        onChange={handleAuthorChange}
        required
      />
      <select
        value={form.selectedValue}
        onChange={handleSelectChange}
        name="categories"
        id="categories"
        required
      >
        <option value="none" disabled>
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
