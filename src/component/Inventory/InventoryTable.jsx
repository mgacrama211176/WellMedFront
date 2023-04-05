import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LoadingButton } from "@mui/lab";
import useGetItem from "../../hooks/InventoryHooks/useGetItem";

export default function InventoryTable() {
  const { data: items, isLoading } = useGetItem();
  console.log(items);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="overscroll-y-auto"
      >
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Base Price</TableCell>
            <TableCell align="right">Mark up Price</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">Re-order price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.item_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{item.item_name}</TableCell>
              <TableCell align="right">{item.base_price}</TableCell>
              <TableCell align="right">{item.markup_price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.reOrder_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
