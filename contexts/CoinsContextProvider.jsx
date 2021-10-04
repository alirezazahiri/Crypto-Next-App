import React, { createContext, useEffect, useState } from "react";

// API
import get from "../services/api";

export const CoinsContext = createContext();

const CoinsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await get();
      setData(data);
    };

    fetchAPI();
  }, []);

  return <CoinsContext.Provider value={data}>{children}</CoinsContext.Provider>;
};

export default CoinsContextProvider;
