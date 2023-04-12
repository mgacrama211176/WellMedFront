import { useState } from "react";
import {
  Table,
  Tooltip,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import useGetItem from "../../hooks/InventoryHooks/useGetItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BuildIcon from "@mui/icons-material/Build";

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
            <TableCell align="right">Actions</TableCell>
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
              <TableCell align="right">
                <div className="flex gap-4 cursor-pointer">
                  <Tooltip title="Delete">
                    <DeleteForeverIcon onClick={() => console.log(item)} />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
