import React, { useEffect, useState } from 'react';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await fetch('movie.json');
      if (!response.ok) {
        throw new Error('Failed to retrieve movies');
      }
      const responseObject = await response.json();
      setMovies(responseObject.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovies = () => {
    return movies.map((movie, index) => (
      <div key={index}>
        <p>Movie: {movie.Title}</p>
        <br />
        <p>Runtime: {movie.Runtime}</p>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          name="textbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={loadMovies}>
          Load a movie
        </button>
      </div>
      <br />
      <div id="moviediv">{renderMovies()}</div>
    </div>
  );
};

export default MovieApp;
