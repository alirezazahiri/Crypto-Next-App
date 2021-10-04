import React from "react";

// Components
import Coin from "./common/Coin";

// Style
import styles from "../styles/CoinsTable.module.css";

const CoinsTable = ({ coins }) => {
  return (
    <div className={styles.container}>
      <table className="table table-responsive">
        <tbody className={styles.tableBody}>
          {coins.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
