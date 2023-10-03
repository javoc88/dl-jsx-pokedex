import React, { useContext } from "react";
import { FilterBar, PokeList } from "../components";
import { PokeContext } from "../context/PokeContext";
import { Button } from "react-bootstrap";

export const Pokedex = () => {
  const { onClickLoadMore } =
    useContext(PokeContext);

  return (
    <>
      <PokeList />
      <FilterBar />
      <div
        className="container-btn-load-more container"
        onClick={onClickLoadMore}
      >
        <Button className="btn-load-more" variant="danger">Cargar más</Button>
      </div>
    </>
  );
};
