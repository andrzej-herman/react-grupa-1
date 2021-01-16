import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [filmSearch, setFilmSearch] = useState("");

  const userTyped = (event) => {
    setFilmSearch(event.target.value);
    onSearch(event.target.value);
  };

  const findFilms = () => {
    onSearch(filmSearch);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="proszę wpisać tytuł filmu lub nazwisko reżysera"
        value={filmSearch}
        onChange={userTyped}
      />
      <InputGroup.Append>
        <Button variant="secondary" onClick={findFilms}>
          Szukaj filmów
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
