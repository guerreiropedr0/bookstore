const Form = () => (
  <form className="book-form" required>
    <label htmlFor="book">
      ADD NEW BOOK
      <br />
      <input type="text" id="book" placeholder="Book title" required />
    </label>
    <select name="categories" id="categories" required>
      <option value="" disabled selected>
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

export default Form;
