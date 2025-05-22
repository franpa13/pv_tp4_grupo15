import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ search, onSearch }) {

  const handleChange = (e) => {
    onSearch(e.target.value)
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Buscar por ID o Descripcion"
        value={search}
        onChange={handleChange}
        className="searchbar-input"
      />

    </div>
  );
}

export default SearchBar;
