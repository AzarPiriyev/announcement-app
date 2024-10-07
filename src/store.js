import { create } from "zustand";

const initialValue = {
  productCount: 0,
  customCart: [],
  customFav: [],
  totalPrice: 0,
  setSizes: "",
  setMaterial: "",
  setCategory: "",
  isLogin: false,
};

const initialState = {
  ...initialValue,
  setFields: () => {},
  setClose: () => {},
};

export const useStore = create((set) => ({
  ...initialState,
  setFields: (fields) =>
    set((state) => ({
      ...state,
      ...fields,
    })),
  setClose: () => set(() => ({ ...initialValue })),
}));
