export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
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

  return state;
};
