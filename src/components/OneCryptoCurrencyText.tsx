import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CircularProgressComponent } from "../components/CircularProgress";
//error fix
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const OneCryptoCurrencyText = () => {
  const { item, isLoading } = useAppSelector((state) => state.currencies);

  if (isLoading) {
    return (
      <Container
        sx={{
          backgroundColor: "rgba(0,23,91, 0.3)",
          borderRadius: "25px",
          marginBottom: "25px",
        }}
      >
        <CircularProgressComponent />
      </Container>
    );
  }

  //remove html tags from text
  var strippedHtml = item.description.uk.replace(/<[^>]+>/g, "");

  return (
    <>
      <Container
        sx={{
          backgroundColor: "rgba(0,23,91, 0.3)",
          borderRadius: "25px",
          marginBottom: "25px",
          color: "white",
          py: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "20px", marginLeft: "35%" }}
        >
          {item.name} <img src={item.image.small} alt={item.name}></img>
        </Typography>
        <Typography>{strippedHtml}</Typography>
        <Container sx={{ marginTop: "20px" }}>
          <Typography>Hashing algorithm: {item.hashing_algorithm}</Typography>
          <Typography>
            The currency began use in: {item.genesis_date}
          </Typography>
        </Container>
      </Container>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          marginLeft: "10px",
          textShadow: "1px 1px 10px black",
        }}
      >
        {item.name} price changes graph:
      </Typography>
    </>
  );
};
