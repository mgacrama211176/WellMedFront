import { create } from "zustand";

const useClientStore = create((set) => ({
  clients: [""],
  newClient: () => set((state) => ({ clients: state.client })),
}));

export default useClientStore;
