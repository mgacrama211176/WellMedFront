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

export default function ClientTable() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const data = async () => {
      const info = await axios.get("http://localhost:4000/api/clients");
      setClients(info.data);
      console.log(info.data);
    };
    data();
  }, []);

  console.log(clients);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="overscroll-y-auto"
      >
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
              <CarInformationModal carInfo={client} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
