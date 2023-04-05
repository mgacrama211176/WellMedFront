import axios from "axios";
export const updateClientApi = async (data) => {
  console.log(data.information);
  const update = await axios.put(
    `http://localhost:4000/api/clients/${data.clientID}`,
    data.information
  );
  return update;
};
