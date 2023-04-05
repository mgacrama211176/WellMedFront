//MUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BuildIcon from "@mui/icons-material/Build";

//custom Hook
import useDeleteClient from "../../hooks/client/useDeleteClient";
import useGetClient from "../../hooks/client/useGetClient";

//components
import CarInformationModal from "./CarInformationModal";
import { UpdateClientModal } from "./ClientModal";

export default function ClientTable() {
  const { mutate: DeleteClient } = useDeleteClient();
  const { data: clients, isLoading } = useGetClient();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const DeleteHandler = (id) => {
    DeleteClient(id);
    console.log(id);
  };

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
            <TableCell align="right">Actions</TableCell>
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
              <TableCell align="right">
                <div className="flex gap-4 cursor-pointer">
                  <Tooltip title="Delete">
                    <DeleteForeverIcon
                      onClick={() => DeleteHandler(client._id)}
                    />
                  </Tooltip>
                  <UpdateClientModal client={client} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
