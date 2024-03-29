import React, { useState, useEffect } from "react";
import "../styles/update.css";
import axios from "axios";
import Delete from "./Delete";

//other components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

//MUI components
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

let StepCounter = 0;

const Update = () => {
  const steps = ["Search Product", "Select Product", "Make Changes"];
  const productUrl = "https://wellmed.onrender.com/search/";
  const productURL = "https://wellmed.onrender.com/product/";
  const updateProductURL = "https://wellmed.onrender.com/product/update/";

  const [selectedProduct, setSelectedProduct] = useState("");
  const [formHidden, setFormHidden] = useState({
    tableContainer: "block",
    UpdateFormContainer: "none",
  });
  const [searchID, setSearchID] = useState({ searchID: "" });
  const [result, setResult] = useState([]);
  const [selectedProductInformation, setSelectedProductInformation] = useState({
    product: "",
    brand: "",
    unit: "",
    price: "",
  });
  const [deleteProduct, setDeleteProduct] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Updatenotify = () => {
    toast.success(`Updated: ${selectedProductInformation.product}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  //SEARCHING FOR ID FUNCTIONS

  const OnChangeSearchInput = (e) => {
    const newSearch = { ...searchID };
    newSearch[e.target.id] = e.target.value;
    setSearchID(newSearch);
    StepCounter = 0;
  };

  const OnclickSearch = async () => {
    const SearchItem = productUrl + searchID.searchID;
    setFormHidden("none");
    try {
      const result = await axios.get(SearchItem);
      setResult(result.data.message);
      StepCounter = 1;
      setFormHidden({
        tableContainer: "block",
        UpdateFormContainer: "none",
      });
    } catch (err) {
      console.log(err);
    }
  };

  //when selected for UPDATE

  const OnClickOnSelected = async () => {
    const combinedUpdateURL = `${productURL}${selectedProduct}`;

    StepCounter = 2;

    try {
      const fetchedProduct = await axios.get(combinedUpdateURL);

      setSelectedProductInformation({
        product: fetchedProduct.data.message.product,
        brand: fetchedProduct.data.message.brand,
        unit: fetchedProduct.data.message.unit,
        price: fetchedProduct.data.message.price,
      });
    } catch (err) {
      console.log(`No Product Selected`);
    }
  };

  useEffect(() => {
    if (selectedProduct === "") {
    } else {
      OnClickOnSelected();
    }
  }, [selectedProduct]);

  const onChangeHandle = (e) => {
    const newProducts = { ...selectedProductInformation };
    newProducts[e.target.id] = e.target.value;
    setSelectedProductInformation(newProducts);
    console.log(newProducts);
  };

  const onSubmitUpdate = async (e) => {
    const combinedUpdateURL = `${updateProductURL}${selectedProduct}`;
    e.preventDefault();
    try {
      const submitNewProductInfo = await axios.put(combinedUpdateURL, {
        product: selectedProductInformation.product,
        brand: selectedProductInformation.brand,
        unit: selectedProductInformation.unit,
        price: parseFloat(selectedProductInformation.price),
      });
      Updatenotify();
      OnclickSearch();
      console.log(submitNewProductInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="optionContainer">
        <h1>Search Item to Update or Delete</h1>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={StepCounter} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="searchInputContainer">
          <input
            type="search"
            name="searchID"
            id="searchID"
            placeholder="Search Product"
            onChange={(e) => OnChangeSearchInput(e)}
          />
          <button type="submit" onClick={OnclickSearch}>
            Search
          </button>
        </div>
        <div
          className="tableContainer"
          style={{ display: ` ${formHidden.tableContainer}` }}
        >
          <table className="searchProductContainer" id="UpdateTable">
            <tbody>
              <tr>
                <th>PRODUCT</th>
                <th>BRAND</th>
                <th>UNIT</th>
                <th>PRICE</th>
                <th> </th>
                <th> </th>
              </tr>

              {result.map((result) => (
                <tr key={result._id}>
                  <td>{result.product}</td>
                  <td>{result.brand}</td>
                  <td>{result.unit}</td>
                  <td>{result.price}</td>
                  <td>
                    <button
                      onClick={function () {
                        setSelectedProduct(result._id);
                        setFormHidden({
                          tableContainer: "none",
                          UpdateFormContainer: "block",
                        });
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    {/* //delete button */}

                    {/* <button
                      onClick={() => {
                        setDeleteProduct(result._id);
                        StepCounter = 2;
                        handleOpen();
                      }}
                    >
                      Delete
                    </button> */}
                    <Delete
                      deleteProduct={deleteProduct}
                      setOpen={setOpen}
                      open={open}
                      StepCounter={StepCounter}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <h1>NO PRODUCT FOUND</h1> */}
        </div>

        {/* Delete Confirmation Modal
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
        </Modal> */}

        {/* //FORM CONTAINER AFTER ONCLICK UPDATE */}
        <div
          className="formContainer"
          style={{ display: ` ${formHidden.UpdateFormContainer}` }}
        >
          <form onSubmit={onSubmitUpdate}>
            <label htmlFor="Product">Product Name</label>
            <input
              type="text"
              id="product"
              // placeholder={selectedProductInformation.product}
              value={selectedProductInformation.product}
              onChange={onChangeHandle}
            />
            <label htmlFor="Product">Brand Name</label>
            <input
              type="text"
              id="brand"
              // placeholder={selectedProductInformation.brand}
              value={selectedProductInformation.brand}
              onChange={onChangeHandle}
              // onChange={onChangeHandle}
            />
            <label htmlFor="Product">Unit</label>
            <select
              name="Unit"
              id="unit"
              value={selectedProductInformation.unit}
              // placeholder={selectedProductInformation.unit}
              onChange={onChangeHandle}
            >
              <option value=""></option>
              <option defaultValue="Ampule">Ampule</option>
              <option value="Bottle">Bottle</option>
              <option value="Capsule">Capsule</option>
              <option value="Cream">Cream</option>
              <option value="Gel">Gel</option>
              <option value="Inhaler">Inhaler</option>
              <option value="Nebule">Nebule</option>
              <option value="Pack">Pack</option>
              <option value="Pieces">Pieces</option>
              <option value="Piece">Piece</option>
              <option value="Sachet">Sachet</option>
              <option value="Tablet">Tablet</option>
              <option value="Tube">Tube</option>
              <option value="Vial">Vial</option>
            </select>
            <label htmlFor="Product">Price</label>
            <input
              type="text"
              id="price"
              // placeholder={selectedProductInformation.price}
              onChange={onChangeHandle}
              value={selectedProductInformation.price}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
