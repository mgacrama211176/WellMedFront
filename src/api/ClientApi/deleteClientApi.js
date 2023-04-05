import axios from "axios";

export const deleteClientApi = async (clientId) => {
  const client = await axios.delete(
    `http://localhost:4000/api/clients/${clientId}`
  );
  return client;
};
