import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import { useEffect } from "react";
import { getTrendingCoins } from "../redux/features/currencies/currencySlice";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Typography } from "@mui/material";
import { CircularProgressComponent } from "./CircularProgress";

interface Props {
  currency: string;
}

export const HomePageCarousel = ({ currency }: Props) => {
  const isLoading = useAppSelector((state) => state.currencies.isLoading);
  const trendingCoins = useAppSelector(
    (state) => state.currencies.trendingCoins
  );

  const dispatch = useAppDispatch();

  console.log("rerender");

  let currencySign = <>&euro;</>;
  if (currency === "usd") currencySign = <>$</>;
  if (currency === "gbp") currencySign = <>&#163;</>;

  useEffect(() => {
    if (trendingCoins.length === 0) {
      dispatch(getTrendingCoins(currency));
    }
  });

  if (isLoading) {
    return <CircularProgressComponent />;
  }

  const items = trendingCoins.map((item) => {
    let profit = item?.price_change_percentage_24h > 0;
    return (
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
        to={`/${item.id}`}
      >
        <img
          src={item.image}
          alt={item.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <Typography sx={{ display: "inline", color: "white" }}>
          {item.symbol}
          &nbsp;
          <Typography
            component={"span"}
            style={{
              color: profit ? "green" : "red",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            {profit && "+"}
            {item?.price_change_percentage_24h?.toFixed(3)}%
          </Typography>
        </Typography>

        <Typography style={{ fontSize: 18, fontWeight: 500, color: "white" }}>
          {item?.current_price.toFixed(3)} {currencySign}
        </Typography>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <Box sx={{ display: "flex", height: "400px", alignItems: "center" }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </Box>
  );
};
