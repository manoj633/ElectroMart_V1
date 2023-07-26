export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Constants
  const FREE_SHIPPING_THRESHOLD = 100;
  const STANDARD_SHIPPING_PRICE = 10;
  const TAX_RATE = 0.15;

  // Calculate Item price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.qty,
      0
    )
  );

  // Calculate shipping price
  state.shippingPrice = addDecimal(
    state.itemsPrice > FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_PRICE
  );

  // Calculate tax price
  state.taxPrice = addDecimal(
    addDecimal(Number(TAX_RATE * state.itemsPrice).toFixed(2))
  );

  // Calculate total price
  state.totalPrice = addDecimal(
    (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
    ).toFixed(2)
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
