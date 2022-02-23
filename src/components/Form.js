import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';
import generateRandomId from './helper';

const Form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    inputTitle: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
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

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: generateRandomId(),
      title: form.inputTitle,
      category: form.selectedText,
    };
    dispatch(postBook(newBook));
  };
  return (
    <div className="book-form">
      <hr className="separator" />
      <h3 className="add-book">ADD NEW BOOK</h3>
      <form onSubmit={(e) => submitBookToStore(e)} className="form" required>
        <br />
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.inputTitle}
          onChange={handleTitleChange}
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
        <button className="btn-2" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default Form;
