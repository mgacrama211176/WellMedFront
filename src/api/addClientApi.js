import axios from "axios";

export const addClientApi = async (clientData) => {
  const data = await axios.post(
    "https://wellmed.onrender.com/api/clients",
    clientData
  );

  return data;
};
