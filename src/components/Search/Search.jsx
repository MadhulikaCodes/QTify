import React, { useState } from "react";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg"
import styles from "./Search.module.css"
import SearchTab from "../SearchTab/SearchTab";

const Search = ({ search }) => {
  const [val,setVal]=useState(search);
  const handleClick=(e)=>{
    e.preventDefault();
   
  }
  return (
    <form className={styles.wrapper} onSubmit={handleClick}>
      <input
        className={styles.search}
        placeholder={val}
        onChange={(e) => setVal(e.target.val)}
      ></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;