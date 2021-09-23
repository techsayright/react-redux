import { constants } from "../constants/constants";

const initialState = {
  products: [],
};

/******************* 
    @Purpose : store all products data from fakestoreapi
    @Parameter : {state , action}
    @Author : DARSH
    ******************/
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return { products: action.productsData };
    default:
      return state;
  }
}
