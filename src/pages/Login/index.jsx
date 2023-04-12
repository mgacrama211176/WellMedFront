import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.jpg";
import SendIcon from "@mui/icons-material/Send";

const index = () => {
  const {
    register: login,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div className="flex flex-row justify-center items-center h-screen ">
      <div className="flex flex-row border rounded">
        <div>
          <img
            src="https://images.pexels.com/photos/4488658/pexels-photo-4488658.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-[500px] border rounded"
          />
        </div>
        <div className="flex flex-col items-center w-auto relative p-10">
          <img src={logo} alt="" className="w-48" />
          <div className="flex flex-col items-center justify-center gap-3 w-auto relative">
            <TextField
              label="Email"
              type="email"
              {...login("email", { required: true })}
            />
            <TextField
              label="Password"
              type="password"
              {...login("password", { required: true })}
            />
            {errors.example && <span>This field is required</span>}
            <button
              type="submit"
              className="border border-black rounded-xl w-38 h-10  hover:bg-[#Ed2530] hover:text-white hover:border-transparent transition duration-300 ease-in-out px-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              Submit <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
