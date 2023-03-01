import { SerializedError } from "@reduxjs/toolkit";

export type StateType = {
  items: CryptoCurrency[];
  item: CryptoCurrencyDeepData;
  trendingCoins: CryptoCurrency[];
  chartData: OneCurrencyChartData;
  isLoading: boolean;
  error: SerializedError | null;
};

export type OneCurrencyChartData = {
  prices: number[][];
};

export type CryptoCurrency = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | {};
  symbol: string;
  total_supply: number;
  total_volume: number;
};

export const emptyCryptoCurrency: CryptoCurrency = {
  ath: 0,
  ath_change_percentage: 0,
  ath_date: "",
  atl: 0,
  atl_change_percentage: 0,
  atl_date: "",
  circulating_supply: 0,
  current_price: 0,
  fully_diluted_valuation: 0,
  high_24h: 0,
  id: "",
  image: "",
  last_updated: "",
  low_24h: 0,
  market_cap: 0,
  market_cap_change_24h: 0,
  market_cap_change_percentage_24h: 0,
  market_cap_rank: 0,
  max_supply: null,
  name: "",
  price_change_24h: 0,
  price_change_percentage_24h: 0,
  roi: null,
  symbol: "",
  total_supply: 0,
  total_volume: 0,
};

export type CryptoCurrencyDeepData = {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id?: any;
  platforms: {};
  detail_platforms: {};
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice?: any;
  additional_notices: any[];
  localization: {};
  description: { uk: string };
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {};
  community_data: {};
  developer_data: {};
  public_interest_stats: {};
  status_updates: [];
  last_updated: "";
  tickers: [];
};

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier?: any;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: {};
}

const emptyLink = {
  homepage: [],
  blockchain_site: [],
  official_forum_url: [],
  chat_url: [],
  announcement_url: [],
  twitter_screen_name: "",
  facebook_username: "",
  bitcointalk_thread_identifier: {},
  telegram_channel_identifier: "",
  subreddit_url: "",
  repos_url: {},
};

export const emptyCryptoCurrencyDeepData: CryptoCurrencyDeepData = {
  id: "",
  symbol: "",
  name: "",
  asset_platform_id: {},
  platforms: {},
  detail_platforms: {},
  block_time_in_minutes: 0,
  hashing_algorithm: "",
  categories: [],
  public_notice: {},
  additional_notices: [],
  localization: {},
  description: { uk: "" },
  links: emptyLink,
  image: { thumb: "", small: "", large: "" },
  country_origin: "",
  genesis_date: "",
  sentiment_votes_up_percentage: 0,
  sentiment_votes_down_percentage: 0,
  market_cap_rank: 0,
  coingecko_rank: 0,
  coingecko_score: 0,
  developer_score: 0,
  community_score: 0,
  liquidity_score: 0,
  public_interest_score: 0,
  market_data: {},
  community_data: {},
  developer_data: {},
  public_interest_stats: {},
  status_updates: [],
  last_updated: "",
  tickers: [],
};
