import React, { useState } from "react";
import "../../styles/console.css";
import axios from "axios";

//other components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddClientModal from "./AddClientModal";
import ClientTable from "./ClientTable";
import styled from "styled-components";

const AddClient = () => {
  const productUrl = "https://wellmed.onrender.com/product/add";

  const notify = () => {
    toast.success(`Added: ${products.ProductName}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
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
      <div>
        <h1 className="text-3xl text-center m-5 font-bold">
          Add Client Information
        </h1>
        <div className="flex justify-center items-center  flex-col">
          <AddClientModal />
          <ClientTable />
        </div>
      </div>
    </div>
  );
};

export default AddClient;
