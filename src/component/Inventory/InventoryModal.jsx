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

export default function InventoryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalSelection, setModalSelection] = useState("");
  console.log(modalSelection);

  const functionalities = ["Add Item", "Delete", "Update"];
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
      {modalSelection === "Add Item" ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Add Item
              </Typography>
              <Box className="flex flex-col gap-5">
                <TextField label="Item Name" id="item_name" required />
                <div className="flex flex-wrap justify-center gap-4">
                  <TextField
                    label="Quantity"
                    id="quantity"
                    type="number"
                    required
                  />
                  <TextField label="Price" id="price" type="number" required />
                  <TextField
                    label="Base Price"
                    id="base_price"
                    type="number"
                    required
                  />
                  <TextField
                    label="Markup Price"
                    id="markup_price"
                    type="number"
                    required
                  />
                  <TextField
                    label="Re-order Price"
                    id="reOrder_price"
                    type="number"
                    required
                  />
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
                Delete Item
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
                Update Item
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
