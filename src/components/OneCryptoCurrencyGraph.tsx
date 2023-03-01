import { useAppSelector } from "../redux/app/hooks";
import { Container } from "@mui/material";
import { Line } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import { CircularProgressComponent } from "./CircularProgress";
//error fix
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const OneCryptoCurrencyGraph = () => {
  const { item, chartData, isLoading } = useAppSelector(
    (state) => state.currencies
  );

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

  return (
    <Container
      sx={{
        backgroundColor: "rgba(0,23,91, 0.3)",
        borderRadius: "25px",
        marginBottom: "5px",
      }}
    >
      <Line
        data={{
          labels: chartData.prices.map((row) => {
            const date = new Date(row[0]);
            const hours =
              date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            const minutes =
              date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes();
            const time = `${hours}:${minutes}`;
            return date.toLocaleDateString("en-GB");
          }),
          datasets: [
            {
              data: chartData.prices.map((row) => row[1]),
              label: `${item.name} price`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: {
                  size: 15,
                },
              },
            },
          },
          elements: {
            point: {
              radius: 2,
            },
          },
          scales: {
            y: {
              grid: {
                color: "rgba(185,185,185,1)",
              },
              ticks: {
                color: "rgba(185,185,185,1)",
              },
            },
            x: {
              grid: {
                color: "rgba(185,185,185,1)",
              },
              ticks: {
                color: "rgba(185,185,185,1)",
              },
            },
          },
        }}
      />
      <Typography fontStyle="italic" color="white">
        Last updated: {item.last_updated}
      </Typography>
    </Container>
  );
};
