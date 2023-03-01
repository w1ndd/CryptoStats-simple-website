import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import currencyReducer from "../features/currencies/currencySlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    currencies: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
