// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSearch = () => {
    onSearch(message);
  };

  return (
    <div className="searching">
      <input
        type="text"
        className="search"
        placeholder="search city"
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="btn"></button>
    </div>
  );
};

export default SearchBar;
