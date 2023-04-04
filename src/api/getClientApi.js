import axios from "axios";

export const getClientApi = async () => {
  const { data: response } = await axios.get(
    "https://wellmed.onrender.com/api/clients"
  );

  return response;
};
