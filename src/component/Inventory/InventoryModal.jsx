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
import useAddItem from "../../hooks/InventoryHooks/useAddItem";
import { LoadingButton } from "@mui/lab";

export default function InventoryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate: addItem, isloading } = useAddItem();

  const [items, setItems] = useState({
    item_name: "",
    quantity: 0.0,
    base_price: 0.0,
    markup_price: 0.0,
    reOrder_price: 0.0,
  });

  const handleChangeInput = (e) => {
    const newItem = { ...items };
    newItem[e.target.name] = e.target.value;
    setItems(newItem);
  };

  const handleSubmit = async () => {
    await addItem(items);
    handleClose();
    setItems({
      item_name: "",
      quantity: 0.0,
      base_price: 0.0,
      markup_price: 0.0,
      reOrder_price: 0.0,
    });
  };

  return (
    <div>
      <div>
        <button
          className="border p-2 m-2 rounded-lg bg-black text-white hover:text-[#EC252F] hover:bg-white font-bold"
          onClick={() => {
            handleOpen();
            setModalSelection(functional);
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
            Add Item
          </Typography>
          <Box className="flex flex-col gap-5">
            <TextField
              label="Item Name"
              name="item_name"
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <div className="flex flex-wrap justify-center gap-4">
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                onChange={(e) => handleChangeInput(e)}
                required
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                onChange={(e) => handleChangeInput(e)}
                required
              />
              <TextField
                label="Base Price"
                name="base_price"
                type="number"
                onChange={(e) => handleChangeInput(e)}
                required
              />
              <TextField
                label="Markup Price"
                name="markup_price"
                type="number"
                onChange={(e) => handleChangeInput(e)}
                required
              />
              <TextField
                label="Re-order Price"
                name="reOrder_price"
                type="number"
                onChange={(e) => handleChangeInput(e)}
                required
              />
            </div>
            <LoadingButton
              variant="contained"
              onClick={handleSubmit}
              loading={isloading}
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
