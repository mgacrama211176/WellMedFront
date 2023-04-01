import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function CarInformationModal({ carInfo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <Button onClick={handleOpen} variant="outlined">
        {carInfo.car_plateNumber}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] border-2 border-black p-4 shadow-md bg-white rounded-md">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Car Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {carInfo.car_year}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
