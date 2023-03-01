import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { CurrencySelect } from "../components/CurrencySelect";

const baseUrl = "http://localhost:3000/markus-spiske-A_6KbwLuVgk-unsplash.jpg";

export const NavBar = () => {
  const [currency, setCurrency] = useState("eur");

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${baseUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(53,61,87, 0.5)",
          borderRadius: "25px",
          paddingBottom: "20px",
        }}
      >
        <Container sx={{ p: 1, marginBottom: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: "10px" }}
          >
            <Typography variant="h4" sx={{ my: "auto", marginLeft: "40px" }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  textShadow: "1px 1px 10px black",
                }}
              >
                CryptoStats
              </Link>
            </Typography>
            <CurrencySelect
              setCurrency={setCurrency}
              currency={currency}
            ></CurrencySelect>
          </Box>
        </Container>
        <Outlet context={{ currency: currency }} />
      </Container>
    </Container>
  );
};
