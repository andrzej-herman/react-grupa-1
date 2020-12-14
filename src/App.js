import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Search from "./search/Search";

const App = () => {
  return (
    <div className="app">
      <Container className="gr1_container">
        <Header />
        <Search />
      </Container>
    </div>
  );
};

export default App;
