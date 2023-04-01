import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.jpg";
import "../styles/add.css";
import { useNavigate } from "react-router-dom";

//components
import AddClient from "../component/ClientInformation/AddClient";
import Inventory from "../component/Inventory/Inventory";
import Cars from "../component/Cars/Cars";

const Console = () => {
  const options = [
    "Client Information",
    "Inventory",
    "Job Card Generator",
    "Accounting",
    "Suppliers",
    "Cars",
  ];

  const [option, setOption] = useState("Client Information");

  const [formHidden, setFormHidden] = useState({
    addItems: "none",
    updateDelete: "none",
  });

  const getSessionUser = sessionStorage.getItem("admin");
  const nav = useNavigate();

  const Logout = () => {
    sessionStorage.removeItem("admin");
    nav("/");
  };

  useEffect(() => {
    setFormHidden;
    Protected();
  }, [formHidden]);

  console.log(getSessionUser);

  const Protected = () => {
    if (getSessionUser) {
    } else {
      nav("/");
    }
  };

  return (
    <div className="flex w-screen">
      <div className="consoleContainer z-0">
        <div className="imgContainer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            {options.map((option) => (
              <li onClick={() => setOption(option)} key={option}>
                {option}
              </li>
            ))}
            <button onClick={Logout}>LOGOUT</button>
          </ul>
        </div>
      </div>
      {/* COMPONENTS */}
      <div className="displayOptions">
        {option === "Client Information" ? (
          <AddClient />
        ) : option === "Inventory" ? (
          <Inventory />
        ) : option === "Cars" ? (
          <Cars />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Console;
//hello po
