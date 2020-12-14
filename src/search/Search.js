import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = () => {
  const [filmSearch, setFilmSearch] = useState("");

  const userTyped = (event) => {
    setFilmSearch(event.target.value);
  };

  const findFilms = () => {
    alert(filmSearch);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="proszę wpisać tytuł filmu lub nazwisko aktora"
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
