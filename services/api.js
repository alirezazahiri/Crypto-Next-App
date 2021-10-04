import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

const get = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );
  return data;
};

export default get;
