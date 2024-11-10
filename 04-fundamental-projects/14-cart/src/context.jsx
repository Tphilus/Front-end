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
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
    // console.log(id);
  };

  const increase = (id) => {
    dispatch({
      type: INCREASE,
      payload: { id },
    });
  };

  const decrease = (id) => {
    dispatch({
      type: DECREASE,
      payload: { id },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
