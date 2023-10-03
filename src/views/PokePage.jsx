import React, { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { firstMayus } from "../helper/helper";
import ProgressBar from "react-bootstrap/ProgressBar";

export const PokePage = () => {
  const { getPokemonByID } = useContext(PokeContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            <span className="number-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1>{firstMayus(pokemon.name)}</h1>
              <div className="card-types info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{pokemon.height/10} M</span>
                </div>
                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight/10} KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h3>Estadísticas Base</h3>
            <div className="stats">
              <div className="stat-group">
                <span>HP</span>
                <ProgressBar now={pokemon.stats[0].base_stat} variant="danger" label={`${pokemon.stats[0].base_stat}`}/>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <ProgressBar now={pokemon.stats[1].base_stat} variant="danger" label={`${pokemon.stats[1].base_stat}`}/>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <ProgressBar now={pokemon.stats[2].base_stat} variant="danger" label={`${pokemon.stats[2].base_stat}`}/>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <ProgressBar now={pokemon.stats[3].base_stat} variant="danger" label={`${pokemon.stats[3].base_stat}`}/>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <ProgressBar now={pokemon.stats[4].base_stat} variant="danger" label={`${pokemon.stats[4].base_stat}`}/>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <ProgressBar now={pokemon.stats[5].base_stat} variant="danger" label={`${pokemon.stats[5].base_stat}`}/>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
