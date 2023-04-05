import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Modal,
  Select,
  MenuItem,
  FormHelperText,
  Tooltip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import BuildIcon from "@mui/icons-material/Build";

//Custom Hooks
import useAddClient from "../../hooks/client/useAddClient";
import useUpdateClient from "../../hooks/client/useUpdateClient";

export const AddClientModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate: addClient, isLoading } = useAddClient();

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
    const yearRegex = /^\d{4}$/;
    if (typeof newClient === Number) {
      const isValidYear = yearRegex.test(event.target.value);
      if (isValidYear || event.target.value === "") {
        setInformation(newClient);
      }
    }
    console.log(newClient);
    newClient[e.target.name] = e.target.value;
    setInformation(newClient);
  };

  const handleSubmit = async () => {
    addClient(information);
    handleClose();
    setInformation({
      client_type: "Individual",
      client_name: "",
      client_address: "",
      client_phoneNumber: 0,
      car_model: "",
      car_make: "",
      car_year: 0,
      car_chassisNumber: "",
      car_engineNumber: "",
      car_plateNumber: "",
    });
  };

  console.log();

  return (
    <div>
      <div>
        <button
          className="border p-2 m-2 rounded-lg bg-black text-white hover:text-[#EC252F] hover:bg-white font-bold"
          onClick={() => {
            handleOpen();
          }}
        >
          Add Item
        </button>
      </div>

      {/* Modal Options */}
      {/* ADD NEW CLIENT */}

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
              />
              <TextField
                label="Car Year"
                name="car_year"
                inputProps={{ maxLength: 4 }}
                onChange={(e) => handleChangeInput(e)}
                required
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
            <LoadingButton
              variant="contained"
              loading={isLoading}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

//----------------------------------------------------------------------------- Update Modal

export const UpdateClientModal = ({ client }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate: updateClient, isLoading } = useUpdateClient();

  // customerInformation Container
  const [information, setInformation] = useState({
    client_type: client.client_type,
    client_name: client.name,
    client_address: client.client_address,
    client_phoneNumber: client.client_phoneNumber,
    car_model: client.car_model,
    car_make: client.car_make,
    car_year: client.car_year,
    car_chassisNumber: client.car_chassisNumber,
    car_engineNumber: client.car_engineNumber,
    car_plateNumber: client.car_plateNumber,
  });

  const handleChangeInput = (e) => {
    const updateClient = { ...information };
    updateClient[e.target.name] = e.target.value;
    setInformation(updateClient);
    console.log(updateClient);
  };

  const handleSubmit = async () => {
    const clientID = client._id;
    const data = { information, clientID };
    updateClient(data, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  console.log();

  return (
    <div>
      <div>
        <Tooltip title="Update">
          <BuildIcon
            onClick={() => {
              handleOpen();
            }}
          />
        </Tooltip>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Update Client Information
          </Typography>
          <Box className="flex flex-col gap-5">
            <div>
              <Select
                className="w-40 text-black"
                defaultValue={client.client_type}
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
              defaultValue={client.client_name}
              label="Customer Name"
              name="client_name"
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <TextField
              label="Customer Address"
              name="client_address"
              defaultValue={client.client_address}
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <TextField
              label="Customer Contact Number"
              name="client_phoneNumber"
              defaultValue={client.client_phoneNumber}
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
                defaultValue={client.car_model}
                onChange={(e) => handleChangeInput(e)}
              />
              <TextField
                label="Car Make"
                name="car_make"
                defaultValue={client.car_make}
                onChange={(e) => handleChangeInput(e)}
                type="number"
              />
              <TextField
                label="Car Year"
                name="car_year"
                defaultValue={client.car_year}
                type="number"
                onChange={(e) => handleChangeInput(e)}
              />
              <TextField
                label="Engine Number"
                name="car_engineNumber"
                defaultValue={client.car_engineNumber}
                onChange={(e) => handleChangeInput(e)}
              />
              <TextField
                label="Chassis Number"
                name="car_chassisNumber"
                defaultValue={client.car_chassisNumber}
                onChange={(e) => handleChangeInput(e)}
              />
              <TextField
                label="Plate Number"
                name="car_plateNumber"
                defaultValue={client.car_plateNumber}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <LoadingButton
              variant="contained"
              loading={isLoading}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
