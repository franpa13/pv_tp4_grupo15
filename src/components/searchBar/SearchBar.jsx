import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(term); // Busca cuando hago click
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Buscar por ID o Descripcion"
        value={term}
        onChange={handleChange}
        className="searchbar-input"
      />
      <button onClick={handleSearchClick} className="searchbar-button">
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
