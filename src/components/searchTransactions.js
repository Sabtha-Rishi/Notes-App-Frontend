import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchTransaction = ({ search, setSearch }) => {
  const [tempSearch, setTempSearch] = useState(search);

  useEffect(() => {
    if (tempSearch === "") {
      setSearch(tempSearch);
    }
  }, [tempSearch]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(tempSearch);
  };
  return (
    <SearchBar>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-bar"
          autoFocus
          placeholder="Search"
          id="searchBar"
          role="searchbox"
          required
          type="text"
          value={tempSearch}
          onChange={(e) => setTempSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </form>
    </SearchBar>
  );
};

export default SearchTransaction;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  transition-duration: 0.4s;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 0;
  align-items: center;
  background-color: #f7f9fb;
  justify-content: center;

  .search-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
  }
  .search-bar {
    height: 40px;
    font-size: 20px;
    color: black;
    background: none;
    /* border-radius: 7px; */
    border: none;
    width: 100%;
  }
  .search-bar:focus {
    padding-left: 10px;
    font-weight: bold;
    outline: none;
    flex-wrap: wrap;
  }

  .search-bar:placeholder-shown {
    padding-left: 10px;
    font-size: 15px;
  }

  .search-btn {
    border: none;
    background-color: none;
    background: none;
    color: #5397db;
    border-radius: 5px;
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
      margin: 30px auto;
      margin-bottom: 0;
    }
  }
`;
