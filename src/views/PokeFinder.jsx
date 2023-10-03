import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { useLocation } from "react-router-dom";
import { PokeCard } from "../components";

export const PokeFinder = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokeContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <PokeCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
