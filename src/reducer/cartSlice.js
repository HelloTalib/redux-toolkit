import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
// The createSlice function generates action creators and action types that correspond to the reducers and state.
const cartSlice = createSlice({
    name: "cart",
     initialState :{
        cartItems: cartItems,
        quantity: 4,
        total: 0,
        isLoading: true,
    },
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrement: (state, {payload}) => {
            // const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            if (cartItem.quantity > 1) {
                cartItem.quantity = cartItem.quantity - 1;
            }
        },
        calculateTotal: (state) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.total = total;
            state.quantity = quantity;
        }

    }
});
// The action creators generated by createSlice will have the same names as the reducer functions that were passed in the reducers field.
export const { clearCart, removeItem, increase, decrement, calculateTotal } = cartSlice.actions;
// The reducer generated by createSlice will automatically handle actions generated by the action creators.
export default cartSlice.reducer;