import { useOutletContext } from "react-router-dom";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { getAllSupportedCoinsMarketData } from "../redux/features/currencies/currencySlice";
import { Container } from "@mui/material";
import { CircularProgressComponent } from "../components/CircularProgress";

const HomePageCarousel = React.lazy(() =>
  import("../components/HomePageCarousel").then(({ HomePageCarousel }) => ({
    default: HomePageCarousel,
  }))
);

const HomePageTable = React.lazy(() =>
  import("../components/HomePageTable").then(({ HomePageTable }) => ({
    default: HomePageTable,
  }))
);

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const { currency } = useOutletContext<{ currency: string }>();

  useEffect(() => {
    dispatch(getAllSupportedCoinsMarketData(currency));
    console.log("dispatch");
  }, [currency]);

  return (
    <>
      <Container
        sx={{
          backgroundColor: "rgba(0,23,91, 0.3)",
          borderRadius: "25px",
          marginBottom: "25px",
        }}
      >
        <Suspense fallback={<CircularProgressComponent />}>
          <HomePageCarousel currency={currency} />
        </Suspense>
      </Container>
      <Container
        sx={{ backgroundColor: "rgba(0,23,91, 0.3)", borderRadius: "25px" }}
      >
        <Suspense fallback={<CircularProgressComponent />}>
          <HomePageTable currency={currency} />
        </Suspense>
      </Container>
    </>
  );
};
