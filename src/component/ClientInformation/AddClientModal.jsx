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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalSelection, setModalSelection] = useState("");
  console.log(modalSelection);

  const functionalities = ["Add Client", "Delete", "Update"];
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
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Add Client
              </Typography>
              <Box className="flex flex-col gap-5">
                <div>
                  <Select className="w-40 text-black" defaultValue="Individual">
                    <MenuItem value="Individual">Individual</MenuItem>
                    <MenuItem value="Company">Company</MenuItem>
                  </Select>
                  <FormHelperText>Client type</FormHelperText>
                </div>
                <TextField label="Customer Name" id="customer_name" required />
                <TextField
                  label="Customer Address"
                  id="customer_address"
                  required
                />
                <TextField
                  label="Customer Contact Number"
                  id="customer_Cnumber"
                />
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Car Information
                </Typography>
                <div className="flex flex-row flex-wrap gap-2 justify-center">
                  <TextField label="Car Model" id="customer_Cnumber" />
                  <TextField label="Car Make" id="customer_Cnumber" />
                  <TextField label="Car Year" id="customer_Cnumber" />
                  <TextField label="Engine Number" id="customer_Cnumber" />
                  <TextField label="Chassis Number" id="customer_Cnumber" />
                  <TextField label="Plate Number" id="customer_Cnumber" />
                </div>
                <Button variant="contained">Submit</Button>
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
            <Box sx={style}>
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
            <Box sx={style}>
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
