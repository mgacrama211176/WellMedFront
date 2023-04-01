import { create } from "zustand";

const useClientStore = create((set) => ({
  clients: [],
  newClient: (data) => set(() => ({ clients: data })),
}));

export default useClientStore;
