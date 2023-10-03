import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const PokeNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="src/assets/img/pokedex-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Pokedex App
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <NavLink
            className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "me-3 active" : undefined)}
            to="/pokedex"
          >
            Pokedex
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
