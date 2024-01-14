import { Link } from 'react-router-dom';
import './navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <ul>
          <li>
            <Link to="/poster">Афиша</Link>
          </li>
          <li>
            <Link to="/media">Медиа</Link>
          </li>
          <li>
            <Link to="/films">Фильмы</Link>
          </li>
          <li>
            <Link to="/actors">Актёры</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/collections">Подборки</Link>
          </li>
          <li>
            <Link to="/categories">Категории</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
