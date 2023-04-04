import axios from "axios";

export const addItemApi = async (ItemData) => {
  const data = await axios.post(
    "http://localhost:4000/api/inventory",
    ItemData
  );

  return data;
};
