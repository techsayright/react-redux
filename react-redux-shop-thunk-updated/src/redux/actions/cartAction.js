import { constants } from "../constants/constants";
import firebaseApi from "../../api/firebaseApi";

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
    @Purpose : replace cart product to redux store from firebase (thunk exaple)
    @Parameter : {}
    @Author : DARSH
    ******************/
export const replaceCartFromFirebase = () => {
  return async (dispatch) => {
    let res = await firebaseApi.get("/cartData.json");
    console.log(res.data);
    dispatch({ type: constants.GET_CART_FIREBASE, cartData: res.data });
  };
};

/******************* 
    @Purpose : replacing cart product to firebase from redux store (thunk exaple)
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const replaceCartToFirebase = (cartDataa) => {
  return async () => {
    await firebaseApi
      .put("/cartData.json", cartDataa)
      .catch((err) => console.log(err));
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
