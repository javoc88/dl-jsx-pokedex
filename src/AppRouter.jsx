import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Pokedex, PokeFinder, PokePage } from "./views";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon/:id" element={<PokePage />} />
      <Route path="search" element={<PokeFinder />} />
      <Route path="/" element={<Navigation />}>
        <Route path="pokedex" element={<Pokedex />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
