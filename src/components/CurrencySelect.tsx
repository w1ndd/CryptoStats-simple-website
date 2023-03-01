import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
}

export const CurrencySelect = ({ setCurrency, currency }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          ccy
        </InputLabel>
        <Select
          inputProps={{
            MenuProps: {
              disableScrollLock: true,
              MenuListProps: {
                sx: {
                  backgroundColor: "transparent",
                },
              },
            },
          }}
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"eur"}>&euro; Euro</MenuItem>
          <MenuItem value={"usd"}>$ USD</MenuItem>
          <MenuItem value={"gbp"}>&#163; GBP</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
