import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <h1 className="title">Bookstore CMS</h1>
      <ul className="navigation-links">
        <li className="active">
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li>
          {' '}
          <BsPerson className="user-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
