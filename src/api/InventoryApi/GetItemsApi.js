import axios from "axios";

export const getItemApi = async () => {
  const { data: response } = await axios.get(
    "http://localhost:4000/api/inventory"
  );

  return response;
};
