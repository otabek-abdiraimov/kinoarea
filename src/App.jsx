import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Poster from "./components/Poster/Poster";
import Media from "./components/Media/Media";
import Films from "./components/Films/Films";
import Actors from "./components/Actors/Actors";
import News from "./components/News/News";
import Collections from "./components/Collections/Collections";
import Categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound/NotFound";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGRiNGNjMWQyMmMwMDMzNGEzMmVjOWE3M2M1MDQyNSIsInN1YiI6IjY1YTJjMGJmYTM0OTExMDEyZDA5ZGZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCLNNugXI4qAwP0TEIRM9pfJMWsRbBeMElm-yfl30bg",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/111/images", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posters" element={<Poster />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/actors" element={<Actors />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/collection" element={<Collections />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
