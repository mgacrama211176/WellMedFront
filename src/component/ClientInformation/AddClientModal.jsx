import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import axios from "axios";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalSelection, setModalSelection] = useState("");
  const functionalities = ["Add Client", "Delete", "Update"];

  // customerInformation Container
  const [information, setInformation] = useState({
    client_type: "Individual",
    client_name: "",
    client_address: "",
    client_phoneNumber: 0,
    car_model: "",
    car_make: "",
    car_year: "",
    car_chassisNumber: "",
    car_engineNumber: "",
    car_plateNumber: "",
  });

  const handleChangeInput = (e) => {
    const newClient = { ...information };
    newClient[e.target.name] = e.target.value;
    console.log(newClient);
    setInformation(newClient);
  };

  const handleSubmit = async () => {
    const data = await axios.post(
      "http://localhost:4000/api/clients",
      information
    );
    console.log(data);
    handleClose();
    setInformation({
      client_type: "Individual",
      client_name: "",
      client_address: "",
      client_phoneNumber: 0,
      car_model: "",
      car_make: "",
      car_year: "",
      car_chassisNumber: "",
      car_engineNumber: "",
      car_plateNumber: "",
    });
  };

  return (
    <div>
      <div>
        {functionalities.map((functional) => (
          <button
            key={functional}
            className="border p-2 m-2 rounded-lg bg-black text-white hover:text-[#EC252F] hover:bg-white font-bold"
            onClick={() => {
              handleOpen();
              setModalSelection(functional);
            }}
          >
            {functional}
          </button>
        ))}
      </div>

      {/* Modal Options */}
      {/* ADD NEW CLIENT */}
      {modalSelection === "Add Client" ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Add Client
              </Typography>
              <Box className="flex flex-col gap-5">
                <div>
                  <Select
                    className="w-40 text-black"
                    defaultValue="Individual"
                    onChange={(e) => handleChangeInput(e)}
                    name="client_type"
                    id="client_type"
                  >
                    <MenuItem value="Individual">Individual</MenuItem>
                    <MenuItem value="Company">Company</MenuItem>
                  </Select>
                  <FormHelperText>Client type</FormHelperText>
                </div>
                <TextField
                  label="Customer Name"
                  name="client_name"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
                <TextField
                  label="Customer Address"
                  name="client_address"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
                <TextField
                  label="Customer Contact Number"
                  name="client_phoneNumber"
                  onChange={(e) => handleChangeInput(e)}
                  type="number"
                />
                <Typography variant="h5" component="h2">
                  Car Information
                </Typography>
                <div className="flex flex-row flex-wrap gap-2 justify-center ">
                  <TextField
                    label="Car Model"
                    name="car_model"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <TextField
                    label="Car Make"
                    name="car_make"
                    onChange={(e) => handleChangeInput(e)}
                    type="number"
                  />
                  <TextField
                    label="Car Year"
                    name="car_year"
                    type="number"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <TextField
                    label="Engine Number"
                    name="car_engineNumber"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <TextField
                    label="Chassis Number"
                    name="car_chassisNumber"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <TextField
                    label="Plate Number"
                    name="car_plateNumber"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>
        </>
      ) : modalSelection === "Delete" ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Delete Client
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Update Client
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}
