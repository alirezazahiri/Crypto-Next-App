import React, { useContext, useEffect, useState } from "react";
// Contexts
import { CoinsContext } from "../contexts/CoinsContextProvider";

// Components
import CoinsTable from "./CoinsTable";
import Search from "./Search";

// Vendors
import Loader from "react-loader-spinner";

// Style
import styles from "../styles/Landing.module.css";

const Landing = () => {
  const coins = useContext(CoinsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(coins);
  }, [coins]);

  return (
    <div style={{ textAlign: "center" }}>
      {coins.length === 0 ? (
        <Loader
          className={styles.spinner}
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={0}
        />
      ) : (
        <div className={styles.container}>
          <Search coins={coins} setData={setData} />
          <CoinsTable coins={data} />
        </div>
      )}
    </div>
  );
};

export default Landing;
