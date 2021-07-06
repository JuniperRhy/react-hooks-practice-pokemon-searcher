import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const [showFront, setShowFront] = useState(true);

  return (
    <Card onClick={() => setShowFront(!showFront)}>
      <div>
        <div className="image">
          <img
            src={showFront ? props.sprite.front : props.sprite.back}
            alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
