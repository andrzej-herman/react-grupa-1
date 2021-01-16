import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Search from "./search/Search";
import Catalog from "./catalog/Catalog";

const App = () => {
  const [whatUserTyped, setWhatUserTyped] = useState(null);
  const userSerached = (userSearched) => {
    setWhatUserTyped(userSearched);
  };

  return (
    <div className="app">
      <Container className="gr1_container">
        <Header />
        <Search onSearch={userSerached} />
        <Catalog searchTerm={whatUserTyped} />
      </Container>
    </div>
  );
};

export default App;
