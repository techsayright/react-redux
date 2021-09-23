import { constants } from "../constants/constants";
import fakeStoreApi from "../../api/fakeStoreApi";

/******************* 
    @Purpose : add products data to redux store from fakestoreapi (react thunk example)
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const getProducts = () => {
  return async (dispatch) => {
    const res = await fakeStoreApi.get("/products").catch((err) => {
      console.log(err);
    });
    console.log(res.data);
    dispatch({ type: constants.GET_PRODUCTS, productsData: res.data });
  };
};

/******************* 
    @Purpose : add selected product data to redux store
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const getSelected = (selected) => {
  return {
    type: constants.GET_SELECTED,
    selected,
  };
};

/******************* 
    @Purpose : show selected product page
    @Parameter : {}
    @Author : DARSH
    ******************/
export const isShowSelected = () => {
  return {
    type: constants.SHOW_SELECTED,
  };
};

/******************* 
    @Purpose : hide selected product page
    @Parameter : {}
    @Author : DARSH
    ******************/
export const hideSelected = () => {
  return {
    type: constants.HIDE_SELECTED,
  };
};
