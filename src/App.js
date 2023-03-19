import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

// import {MovieItem} from './MovieItem'
import SearchIcon from "./search.svg";

// 2a0bb587

const API_URL = "http://www.omdbapi.com?apikey=2a0bb587";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  // "Poster": "N/A"
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm)
  }, [searchTerm])

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  

  return (
    <>
      <div className="app">
        <h1>Movieland</h1>

        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {setSearchTerm(searchTerm)}} 
            
          />
        </div>

        {movies?.length > 0 ? (
          <>
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="empty">
              <h2>no movies found</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
