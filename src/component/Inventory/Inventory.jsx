import React, { useState } from "react";
import "../../styles/console.css";

//other components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InventoryModal from "./InventoryModal";
import InventoryTable from "./InventoryTable";

const Inventory = () => {
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
        <h1 className="text-3xl text-center m-5 font-bold">Inventory</h1>
        <div className="flex justify-center items-center  flex-col">
          <InventoryModal />
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
