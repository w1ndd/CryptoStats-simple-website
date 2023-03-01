import { Box, CircularProgress } from "@mui/material";

export const CircularProgressComponent = () => {
  return (
    <Box sx={{ display: "flex", height: "400px", alignItems: "center" }}>
      <CircularProgress style={{ color: "white" }} />
    </Box>
  );
};
