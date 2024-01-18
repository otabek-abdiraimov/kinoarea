import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Poster from "./components/Poster/Poster";
import Media from "./components/Media/Media";
import Films from "./components/Films/Films";
import Actors from "./components/Actors/Actors";
import News from "./components/News/News";
import Collections from "./components/Collections/Collections";
import Categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound/NotFound";
import "./App.css"

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch("https://api.trakt.tv/movies/popular", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "trakt-api-key": "YOUR_API_KEY",
  //           "trakt-api-version": "2",
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setMovies(data || []);
  //       } else {
  //         console.error("Failed to fetch movies");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  return (
    <div className="container">
      <Navbar />
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posters" element={<Poster />} />
        <Route path="/media" element={<Media />} />
        <Route path="/films" element={<Films />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/news" element={<News />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
