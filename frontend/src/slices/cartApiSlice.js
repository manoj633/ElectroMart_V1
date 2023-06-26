import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //calculate Item price
      state.itemsPrice = addDecimal(
        state.cartItems.reduce(
          (accumulator, item) => accumulator + item.price * item.qty,
          0
        )
      );

      //calculate shipping price
      //If Items price is greater than $100, then shipping price is $0
      //otherwise shipping price is $10
      state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);
      //tax price (tax 15%)
      state.taxPrice = addDecimal(
        addDecimal(Number(0.15 * state.itemsPrice).toFixed(2))
      );

      //Total price
      state.totalPrice =
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
