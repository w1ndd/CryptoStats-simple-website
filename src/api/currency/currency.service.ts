import { API_COINS_MARKETS, API_COINS, httpCommon } from "..";

const getAllSupportedCoinsMarketData = (currency: string) => {
  return httpCommon.get(`${API_COINS_MARKETS}/?vs_currency=${currency}`);
};

const getOneCoinBigData = (id: string) => {
  return httpCommon.get(`${API_COINS}/${id}`);
};

const getOneCoinChartData = (id: string, currency: string, days: number) => {
  return httpCommon.get(
    `${API_COINS}/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
};

const getTrendingCoins = (currency: string) => {
  return httpCommon.get(
    `${API_COINS_MARKETS}/?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
};

export const currencyService = {
  getAllSupportedCoinsMarketData,
  getOneCoinBigData,
  getOneCoinChartData,
  getTrendingCoins,
};
