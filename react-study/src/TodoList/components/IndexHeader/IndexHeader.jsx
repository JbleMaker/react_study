/**@jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { IoSearch } from "react-icons/io5";

function IndexHeader({ filter, setFilter, searchText, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleFilterOnChange = (e) => {
    setFilter(e.target.id);
  };

  const handleSearchInputOnKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    setSearchText(searchInputValue);
    setSearchInputValue("");
  };

  const handleSearchButtonOnClick = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    setSearchText(searchInputValue);
    setSearchInputValue("");
  };

  const handleSearchInputOnChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <>
      <div css={s.container}>
        <input
          css={s.searchInput}
          type="text"
          value={searchInputValue}
          onChange={handleSearchInputOnChange}
          onKeyDown={handleSearchInputOnKeyDown}
        />
        <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
          <IoSearch />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input
          type="radio"
          name="filter"
          id="all"
          checked={filter === "all"}
          onChange={handleFilterOnChange}
        />
        <label htmlFor="">전체</label>
        <input
          type="radio"
          name="filter"
          id="complete"
          checked={filter === "complete"}
          onChange={handleFilterOnChange}
        />
        <label htmlFor="">완료</label>
        <input
          type="radio"
          name="filter"
          id="incomplete"
          checked={filter === "incomplete"}
          onChange={handleFilterOnChange}
        />
        <label htmlFor="">미완료</label>
      </div>
    </>
  );
}

export default IndexHeader;
