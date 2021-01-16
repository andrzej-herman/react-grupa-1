import React from "react";
import "./Catalog.css";
import { movies, getMovies } from "../data";
import MovieCard from "../movieCard/MovieCard";

const Catalog = ({ searchTerm }) => {
  const moviesToDisplay = searchTerm ? getMovies(searchTerm) : movies;
  return (
    <div className="catalog">
      {moviesToDisplay.map((x) => (
        <MovieCard
          key={x.id}
          title={x.title}
          director={x.director}
          descr={x.description}
        />
      ))}
    </div>
  );
};

export default Catalog;
