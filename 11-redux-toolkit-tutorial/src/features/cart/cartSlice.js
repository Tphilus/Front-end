import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";
import { openModal } from "../modal/modalSlice";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  //   cartItem: [],
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

export const getCartItems = createAsyncThunk("cart/getCartItems", async (name, thunkAPI) => {
  try {
    // console.log(name);
    // console.log(thunkAPI);
    // console.log(thunkAPI.getState());
    // thunkAPI.dispatch(openModal())
    
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    // console.log(error);
   return thunkAPI.rejectWithValue('Something want wrong')
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { cartItems: [] };
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    }).addCase(getCartItems.fulfilled, (state, action) => {
      // the action will contain the "resp" result
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    }).addCase(getCartItems.rejected, (state, action) => {
      // console.log(action); 
      state.isLoading = false;
    })
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     // the action will contain the "resp" result
  //     console.log(action);
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     // console.log(action);
      
  //     state.isLoading = false;
  //   },
  // },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
