import React, { useState, useEffect } from "react";
import axios from "axios";
import "./hero.modules.css";
import Loader from "../Loader";

const api = "https://www.omdbapi.com/?";
const apiKey = "apikey=8a6d7dba";
const youtubeApiKey = "AIzaSyCG74VeqETnT91endIFFkfu9GvDadifNhE"; // Replace with your YouTube API key

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const getRandomMovies = async () => {
    try {
      const res = await axios.get(api + apiKey + "&s=spider&type=movie&page=1");

      if (res.data.Response === "True") {
        const randomMovies = res.data.Search.sort(
          () => 0.8 - Math.random()
        ).slice(0, 8);

        // Fetch trailers for each movie
        const moviesWithTrailers = await Promise.all(
          randomMovies.map(async (movie) => {
            const trailerUrl = await getTrailerUrl(movie.Title);
            return { ...movie, trailerUrl };
          })
        );

        setMovies(moviesWithTrailers);
      } else {
        console.error("API error:", res.data.Error);
      }
    } catch (error) {
      console.error("API request failed:", error.message);
    }
  };

  const getTrailerUrl = async (title) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
          `${title} official trailer`
        )}&key=${youtubeApiKey}`
      );

      if (res.data.items && res.data.items.length > 0) {
        return `https://www.youtube.com/watch?v=${res.data.items[0].id.videoId}`;
      } else {
        console.error("No trailer found for", title);
        return null;
      }
    } catch (error) {
      console.error("YouTube API request failed:", error.message);
      return null;
    }
  };

  const showMore = () => {
    getRandomMovies();
  };

  useEffect(() => {
    getRandomMovies();
  }, []);

  return (
    <div>
      <h1>Hozirda mashxur</h1>
      {movies.length > 0 ? (
        <div className="movies">
          {movies.map((movie) => (
            <>
              <div key={movie.title} className="movie">
                <img src={movie.Poster} alt="" />
                <div className="movie-title">
                  <p className="movie_title">{movie.Title}</p>
                  <p className="movie_title">{movie.Genre}</p>
                  {movie.trailerUrl && (
                    <a
                      className="movie_trailer"
                      href={movie.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Treylerni ko'rish
                    </a>
                  )}
                </div>
              </div>
              <div key={movie.imdbID} className="movie movie2">
                <img src={movie.Poster} alt="" />
                <div className="movie-title">
                  <p className="movie_title">{movie.Title}</p>
                  <p className="movie_title">{movie.Genre}</p>
                  {movie.trailerUrl && (
                    <a
                      className="movie_trailer"
                      href={movie.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Treylerni ko'rish
                    </a>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <div className="btn_parent">
        <button className="white_btn" onClick={showMore}>
          Ko'proq ko'rish
        </button>
      </div>
    </div>
  );
};

export default Hero;
