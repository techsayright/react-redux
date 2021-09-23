import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import productReducer from "./product-list-reducer";
import selectedProduct from "./selected-product";

export const reducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProduct,
  cart: cartReducer,
});
