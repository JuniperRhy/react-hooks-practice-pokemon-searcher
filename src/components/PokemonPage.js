import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchInput, setSearchInput] = useState("");
  const [pCollection, setPCollection] = useState([]);

  function getPokemon() {
    fetch(`http://localhost:3001/pokemon`)
      .then((data) => data.json())
      .then((pokemon) => setPCollection(pokemon));
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm getPokemon={getPokemon} />
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <br />
      <PokemonCollection
        searchInput={searchInput}
        pCollection={pCollection}
        setPCollection={setPCollection}
        getPokemon={getPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
