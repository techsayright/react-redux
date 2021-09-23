import { constants } from "../constants/constants";

/******************* 
    @Purpose : add products data to redux store from fakestoreapi
    @Parameter : {obj}
    @Author : DARSH
    ******************/
export const getProducts = (productsData) => {
  return {
    type: constants.GET_PRODUCTS,
    productsData,
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
