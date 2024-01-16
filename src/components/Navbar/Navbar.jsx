import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const searchMovies = async () => {
    try {
      const apiKey = "8a6d7dba";
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`
      );
      setSearchResults(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data from OMDB API", error);
    }
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
            className={`${styles.input}`}
            type="text"
            placeholder="Search movies..."
            style={{ display: isSearchVisible ? "block" : "none" }}
            value={searchInput}
            onChange={handleSearchChange}
          />
          <div className={`${styles.search}`} onClick={searchMovies}>
            <img
              src="/search_icon.svg"
              alt="search"
              className={`${styles.search_icon}`}
            />
          </div>
          <button className={`${styles.blue_btn}`}>Войти</button>
        </div>
        {/* Display search results */}
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((result) => (
                <li key={result.imdbID}>{result.Title}</li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
