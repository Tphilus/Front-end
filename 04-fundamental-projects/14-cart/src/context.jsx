import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  DECREASE,
  INCREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import cartItems from "./data";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [...cartItems],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
