const BookSection = () => {
  return (
    <section className="book-section">
      <div className="book-card">
        <div className="book-info">
          <h3 className="book-category">Action</h3>
          <h2 className="book-title">The Hunger Games</h2>
          <h4 className="book-author">Suzane Collins</h4>
          <ul className="book-events">
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
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
    </section>
  );
};

export default BookSection;
