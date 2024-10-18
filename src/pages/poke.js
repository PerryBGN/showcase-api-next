"use client";
import { useState, useEffect } from "react";

const PokeComponent = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error fetching the Pokémon:", error));
  }, []);

  return (
    <div>
      <h1>Datos pokemon</h1>
      {pokemon ? (
        <div>
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
};

export default PokeComponent;
