import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container-home container">
      <div className="container-home-title">
        <h1>Bienvenido Maestro Pokémon</h1>
        <div className="container-home-btn">
          <Link to="/pokedex">
            <Button className="btn-home" variant="danger">
              <img
                src="src/assets/img/pokeball-icon.png"
                alt=""
                width="80"
                height="80"
                className="d-inline-block align-center"
              />
              Iniciar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
