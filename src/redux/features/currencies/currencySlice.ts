import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currencyService } from "../../../api/currency/currency.service";

import {
  StateType,
  CryptoCurrency,
  CryptoCurrencyDeepData,
  emptyCryptoCurrencyDeepData,
  OneCurrencyChartData,
} from "../../app/types/types";

const initialState: StateType = {
  items: [],
  item: emptyCryptoCurrencyDeepData,
  trendingCoins: [],
  chartData: { prices: [] },
  isLoading: false,
  error: null,
};

export const getAllSupportedCoinsMarketData = createAsyncThunk<
  CryptoCurrency[],
  string
>("currency/getAllSupportedCoinsMarketData", async (currency) => {
  try {
    return await currencyService
      .getAllSupportedCoinsMarketData(currency)
      .then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
});

export const getOneCoinBigData = createAsyncThunk<
  CryptoCurrencyDeepData,
  string
>("currency/getOneCoinBigData", async (id) => {
  try {
    return await currencyService.getOneCoinBigData(id).then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
});

export const getOneCoinChartData = createAsyncThunk<
  OneCurrencyChartData,
  { id: string; currency: string; days: number }
>("currency/getOneCoinChartData", async ({ id, currency, days }) => {
  try {
    return await currencyService
      .getOneCoinChartData(id, currency, days)
      .then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
});

export const getTrendingCoins = createAsyncThunk<CryptoCurrency[], string>(
  "currency/CryptoCurrency",
  async (currency) => {
    try {
      return await currencyService
        .getTrendingCoins(currency)
        .then((res) => res.data);
    } catch (e) {
      console.log(e);
    }
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllSupportedCoinsMarketData
    builder.addCase(getAllSupportedCoinsMarketData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllSupportedCoinsMarketData.fulfilled,
      (state, action) => {
        state.items = action.payload as CryptoCurrency[];
        state.isLoading = false;
      }
    );
    builder.addCase(getAllSupportedCoinsMarketData.rejected, (state) => {
      state.error = state.error;
      state.isLoading = false;
    });

    //getOneCoinBigData
    builder.addCase(getOneCoinBigData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOneCoinBigData.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getOneCoinBigData.rejected, (state) => {
      state.error = state.error;
      state.isLoading = false;
    });

    //getOneCoinChartData
    builder.addCase(getOneCoinChartData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOneCoinChartData.fulfilled, (state, action) => {
      state.chartData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getOneCoinChartData.rejected, (state) => {
      state.error = state.error;
      state.isLoading = false;
    });

    //getTrendingCoins
    builder.addCase(getTrendingCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTrendingCoins.fulfilled, (state, action) => {
      state.trendingCoins = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTrendingCoins.rejected, (state) => {
      state.error = state.error;
      state.isLoading = false;
    });
  },
});

export default currencySlice.reducer;
