import React from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

const Container = styled.div``;
const Button = styled.button`
  cursor: pointer;
`;
const Option = styled.div`
  display: flex;
`;
const Optionbutton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #65a404;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #1aa5aa;
  }
`;

const Delete = ({ deleteProduct, setOpen, open, StepCounter }) => {
  const deleteURL = 'http://localhost:4000/product/delete/';
  const deletenotify = () => {
    toast.success(`Product Deleted`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  //For Deleting the Item

  const OnClickDelete = async (e) => {
    const combinedUpdateURL = `${deleteURL}${deleteProduct}`;
    console.log(combinedUpdateURL);
    e.preventDefault();

    try {
      const deleteProductSelected = await axios.delete(combinedUpdateURL);
      deletenotify();
      OnclickSearch();
      handleClose();
    } catch (err) {
      console.log(`No product selected for delete`);
    }
  };
  return (
    <Container>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        Delete Product
      </Button>
      {/* Delete Confirmation Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <h1>Are you sure you want to delete this item?</h1>
          <Option>
            <Optionbutton type="submit" onClick={OnClickDelete}>
              Yes
            </Optionbutton>
            <Optionbutton
              type="submit"
              onClick={() => {
                handleClose();
                StepCounter = 1;
              }}
            >
              No
            </Optionbutton>
          </Option>
        </form>
      </Modal>
    </Container>
  );
};

export default Delete;
