import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

export const getLiveCryptoPrices = async () => {
  const { data } = await axios.get(API_URL, {
    params: {
      vs_currency: "usd",
      ids: "bitcoin,ethereum,solana,dogecoin,cardano",
      order: "market_cap_desc",
      per_page: 5,
      page: 1,
      sparkline: false, 
      price_change_percentage: "1h,24h,7d",
    },
  });
  console.log(data);
  return data;
};
