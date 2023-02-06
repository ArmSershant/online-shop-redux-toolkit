import ProductReducer from "./features/Products/Products.slice"
import CartReducer from "./features/Cart/Cart.slice"
import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
const Root = combineReducers({ products: ProductReducer, cart: CartReducer })
export const mystore = configureStore({ reducer: Root })