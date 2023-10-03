import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { PokeCard } from "./PokeCard";
import { Loader } from "./Loader";

export const PokeList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokeContext);

  return (
    <>
      {loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<PokeCard pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<PokeCard pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
    </>
  );
};
