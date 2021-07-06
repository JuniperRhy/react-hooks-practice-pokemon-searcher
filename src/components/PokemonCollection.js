import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(props) {
  useEffect(() => {
    props.getPokemon();
  }, []);

  function renderCards() {
    return props.pCollection
      .filter((p) => p.name.includes(props.searchInput))
      .map((p, index) => (
        <PokemonCard key={index} name={p.name} sprite={p.sprites} hp={p.hp} />
      ));
  }

  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>{renderCards()}</Card.Group>
    </>
  );
}

export default PokemonCollection;
