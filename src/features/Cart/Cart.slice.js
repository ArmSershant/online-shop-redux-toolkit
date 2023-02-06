import { createSlice } from "@reduxjs/toolkit"

const state = {
  items: [],
  total: 0,
}
const CartSlice = createSlice({
  name: "CartSlice",
  initialState: state,
  reducers: {
    moveToCart: (state, action) => {
      if (state.items.some((elm) => elm.id === action.payload.id)) {
        state.items = [
          ...state.items.map((elm) =>
            elm.id === action.payload.id
              ? { ...elm, quantity: ++elm.quantity }
              : elm
          ),
        ]
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    quantityUp: (state, action) => {
      state.items.map((elm) =>
        elm.id === action.payload.id ? ++elm.quantity : elm
      )
    },
    quantityDown: (state, action) => {
      state.items.map((elm) =>
        elm.id === action.payload.id
          ? elm.quantity <= 1
            ? (elm.quantity = 1)
            : --elm.quantity
          : elm
      )
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((elm) => elm.id !== action.payload.id)
    },
  },
})
export const { moveToCart, quantityUp, quantityDown, deleteItem } =
  CartSlice.actions
export default CartSlice.reducer
