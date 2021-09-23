import { constants } from "../constants/constants";

const initialState = {
  cartProducts: [],
  isCartAdded: {},
  totalQuantity: 0,
  isShowCart: false,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CART_PRODUCT:
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.cartProduct.id
      );
      if (existingProductIndex === -1) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.cartProduct],
          totalQuantity: state.totalQuantity + 1,
        };
      }
      let dummyProducts = [...state.cartProducts];
      dummyProducts[existingProductIndex].quantity =
        dummyProducts[existingProductIndex].quantity + 1;
      return {
        ...state,
        cartProducts: dummyProducts,
        totalQuantity: state.totalQuantity + 1,
      };

    case constants.REMOVE_CART_PRODUCT:
      const existingItemIndex = state.cartProducts.findIndex(
        (product) => product.id === action.cartID
      );
      let dummyProduct = [...state.cartProducts];
      dummyProduct[existingItemIndex].quantity =
        dummyProduct[existingItemIndex].quantity - 1;

      let dummyIsCartAdded = { ...state.isCartAdded };

      if (dummyProduct[existingItemIndex].quantity === 0) {
        dummyIsCartAdded[`${action.cartID}a`] = null;
        dummyProduct = state.cartProducts.filter(
          (product) => product.id !== action.cartID
        );
      }
      return {
        ...state,
        cartProducts: dummyProduct,
        isCartAdded: dummyIsCartAdded,
        totalQuantity: state.totalQuantity - 1,
      };

    case constants.IS_CART_ADDED:
      const { value } = action;
      return {
        ...state,
        isCartAdded: { ...state.isCartAdded, [`${value}a`]: value },
      };

    case constants.SHOW_CART:
      return { ...state, isShowCart: !state.isShowCart };

    case constants.GET_CART_FIREBASE:
      return {
        ...state,
        cartProducts: action.cartData.cartProducts || [],
        isCartAdded: action.cartData.isCartAdded || {},
        totalQuantity: action.cartData.totalQuantity,
      };

    default:
      return state;
  }
};
