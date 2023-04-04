import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import axios from "axios";
import CarInformationModal from "./CarInformationModal";
import useGetClient from "../../hooks/client/useGetClient";

export default function ClientTable({ modalSelection }) {
  const { data: clients, isLoading } = useGetClient();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <TableContainer
      component={Paper}
      className="max-h-[700px] max-w-[1000px] overflow-y-auto"
    >
      <Table aria-label="simple table" className=" max-w-[650em] ">
        <TableHead>
          <TableRow>
            <TableCell>Client Type</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Client Address</TableCell>
            <TableCell align="right">Client Phone Number</TableCell>
            <TableCell align="right">Client Car Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.client_type}
              </TableCell>
              <TableCell align="right">{client.client_name}</TableCell>
              <TableCell align="right">{client.client_address}</TableCell>
              <TableCell align="right">{client.client_phoneNumber}</TableCell>
              <TableCell align="right">
                <CarInformationModal carInfo={client} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
