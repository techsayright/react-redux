import { constants } from "../constants/constants";

/******************* 
    @Purpose : adding cart product to redux store
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const addCartProduct = (cartProduct) => {
  return {
    type: constants.GET_CART_PRODUCT,
    cartProduct,
  };
};

/******************* 
    @Purpose : adding cart product to redux store from firebase
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const addCartFromFirebase = (cartData) => {
  return {
    type: constants.GET_CART_FIREBASE,
    cartData,
  };
};

/******************* 
    @Purpose : remove cart product from redux store
    @Parameter : {cartID}
    @Author : DARSH
    ******************/
export const removeCartProduct = (cartID) => {
  return {
    type: constants.REMOVE_CART_PRODUCT,
    cartID,
  };
};

/******************* 
    @Purpose : check that particular item is added or not
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const cartAdded = (value) => {
  return {
    type: constants.IS_CART_ADDED,
    value,
  };
};

/******************* 
    @Purpose : cart showing or not like toggle
    @Parameter : {}
    @Author : DARSH
    ******************/
export const cartShow = () => {
  return {
    type: constants.SHOW_CART,
  };
};
