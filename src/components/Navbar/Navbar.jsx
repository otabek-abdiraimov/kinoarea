import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <Link className={`${styles.link}`} to="/posters">
              Афиша
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/media">
              Медиа
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/films">
              Фильмы
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/actors">
              Актёры
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/news">
              Новости
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/collections">
              Подборки
            </Link>
          </li>
          <li>
            <Link className={`${styles.link}`} to="/categories">
              Категории
            </Link>
          </li>
        </ul>
        <div className={`${styles.nav_child}`}>
          <input
            type="text"
            placeholder="Search movies..."
            style={{ display: isSearchVisible ? "block" : "none" }}
          />
          <div className={`${styles.search}`} onClick={toggleSearchBar}>
            <img
              src="/search_icon.svg"
              alt="search"
              className={`${styles.search_icon}`}
            />
          </div>
          <button>Войти</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
