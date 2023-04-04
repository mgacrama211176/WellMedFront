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
  const [modalSelection, setModalSelection] = useState("");
  const functionalities = ["Add Item", "Delete", "Update"];
  const { mutate: addItem, isloading } = useAddItem();

  const [items, setItems] = useState({
    item_name: "",
    quantity: "",
    base_price: "",
    markup_price: "",
    reOrder_price: "",
  });

  const handleChangeInput = (e) => {
    const newItem = { ...items };
    newItem[e.target.name] = e.target.value;
    console.log(newItem);
    setItems(newItem);
  };

  // const handleSubmit = async () => {
  //   await addItem(items);
  //   setItems({
  //     item_name: "",
  //     quantity: "",
  //     base_price: "",
  //     markup_price: "",
  //     reOrder_price: "",
  //   });
  // };

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
                  // onClick={handleSubmit()}
                  loading={isloading}
                >
                  Submit
                </LoadingButton>
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
            <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
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
