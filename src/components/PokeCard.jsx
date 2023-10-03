import React from "react";
import { Link } from "react-router-dom";
import { firstMayus } from "../helper/helper";
import { Card } from "react-bootstrap";

export const PokeCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <Card border="danger" style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          src={pokemon.sprites.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
        <Card.Header>N° {pokemon.id}</Card.Header>
        <Card.Body>
          <Card.Title>{firstMayus(pokemon.name)}</Card.Title>
          <Card.Text>
            <div className="card-types">
              {pokemon.types.map((type) => (
                <span key={type.type.name} className={type.type.name}>
                  {type.type.name}
                </span>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
