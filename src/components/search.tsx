import { useState } from "react";

function SearchBar(props: any) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event: any) {
    setSearchInput(event.target.value);
  }
  return (
    <div className="searchDiv">
      <input
      className="search"
        type="text"
        name="id"
        required
        placeholder="Enter here to search"
        onChange={handleSearch}
      />
      <button
        id="search-button"
        type="submit"
        onClick={() => props.onSearch(searchInput)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;