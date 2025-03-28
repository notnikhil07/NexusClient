import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

const useStore = create((set, get) => ({
  user: null,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/user/getMe");
      // console.log(response.data);
      set({ user: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  setUser: (userData) => {
    set({ user: userData });
  },
}));

export default useStore;
