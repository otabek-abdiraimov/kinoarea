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
