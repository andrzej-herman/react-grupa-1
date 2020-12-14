import React from "react";
import "./Header.css";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Filmoteka</h1>
      <p>Intrenetowy katalog filmów wraz z wyszukowarką tytułów i aktorów</p>
      <p>
        <Button variant="secondary">Pokaż losowe filmy</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
