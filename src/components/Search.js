import React, { useState } from "react";

function Search(props) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={(e) => props.setSearchInput(e.target.value)}
          value={props.searchInput}
          className="prompt"
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
