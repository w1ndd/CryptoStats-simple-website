import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";
import { CircularProgressComponent } from "./CircularProgress";

interface Props {
  currency: string;
}

export const HomePageTable = ({ currency }: Props) => {
  const isLoading = useAppSelector((state) => state.currencies.isLoading);
  const items = useAppSelector((state) => state.currencies.items);

  console.log("rerender");

  let currencySign = <>&euro;</>;
  if (currency === "usd") currencySign = <>$</>;
  if (currency === "gbp") currencySign = <>&#163;</>;

  if (isLoading) {
    return <CircularProgressComponent />;
  }

  return (
    <TableContainer sx={{ backgroundColor: "rgba(255,255,255,0)" }}>
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableCell-root": {
            borderBottom: "1px solid rgba(75,101,177, 0.5)",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Place</TableCell>
            <TableCell></TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Name
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Current price
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Change 24h
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Highest 24h
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Lowest 24h
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => {
            const profit = row.price_change_percentage_24h > 0;
            return (
              <TableRow
                key={row.market_cap_rank}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  border: 0,
                }}
              >
                <TableCell sx={{ width: "10px", color: "white" }}>
                  {row.market_cap_rank}
                </TableCell>
                <TableCell sx={{ width: "25px", color: "white" }}>
                  <Link to={`/${row.id}`}>
                    <img
                      alt={row.name}
                      src={row.image}
                      style={{ width: "25px", marginRight: "2px" }}
                    ></img>
                  </Link>
                </TableCell>
                <TableCell sx={{ width: "50px", color: "white" }} align="right">
                  <Link
                    to={`/${row.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.current_price} {currencySign}
                </TableCell>
                <TableCell
                  style={{
                    color: profit ? "#00b818" : "#ff0010",
                    fontWeight: "bold",
                  }}
                  align="right"
                >
                  {row.price_change_percentage_24h}%
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  {row.high_24h} {currencySign}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  {row.low_24h} {currencySign}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
