import React, { useState } from "react";

// Style
import styles from "../styles/Search.module.css";

const Search = ({ coins, setData }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
    setData(
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(value.trim().toLowerCase()) ||
          coin.symbol.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
