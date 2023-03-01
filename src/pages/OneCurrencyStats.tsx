import React, { Suspense } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import {
  getOneCoinBigData,
  getOneCoinChartData,
} from "../redux/features/currencies/currencySlice";
import { CircularProgressComponent } from "../components/CircularProgress";

const OneCryptoCurrencyGraph = React.lazy(() =>
  import("../components/OneCryptoCurrencyGraph").then(
    ({ OneCryptoCurrencyGraph }) => ({ default: OneCryptoCurrencyGraph })
  )
);

const OneCryptoCurrencyText = React.lazy(() =>
  import("../components/OneCryptoCurrencyText").then(
    ({ OneCryptoCurrencyText }) => ({ default: OneCryptoCurrencyText })
  )
);

export const OneCurrencyStats = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { currency } = useOutletContext<{ currency: string }>();

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(getOneCoinBigData(params.id));
      dispatch(
        getOneCoinChartData({ id: params.id, currency: "eur", days: 10 })
      );
    }
    console.log("dispatch one currency");
  }, [currency]);

  return (
    <>
      <Suspense fallback={<CircularProgressComponent />}>
        <OneCryptoCurrencyText />
      </Suspense>
      <Suspense fallback={<CircularProgressComponent />}>
        <OneCryptoCurrencyGraph />
      </Suspense>
    </>
  );
};
