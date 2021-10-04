import React from "react";

import styles from "../../styles/Coin.module.css";

const Coin = ({ coin }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = coin;
  return (
    <tr className={styles.rowContainer}>
      <td>
        <img src={image} alt={symbol} />
      </td>
      <td>
        <h3 className={styles.name}>{name}</h3>
      </td>
      <td>
        <p className={styles.symbol}>{symbol.toUpperCase()}</p>
      </td>
      <td>
        <p className={styles.price}>{current_price} $</p>
      </td>
      <td>
        <span
          className={styles.priceChange}
          style={{
            color: price_change_percentage_24h > 0 ? "#91C788" : "#F05945",
          }}
        >
          {price_change_percentage_24h.toFixed(2)} %
        </span>
      </td>
      <td className={styles.marketCap}>
        <p>{market_cap} $</p>
      </td>
    </tr>
  );
};

export default Coin;
