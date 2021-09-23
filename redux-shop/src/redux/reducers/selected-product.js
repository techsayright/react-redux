import { constants } from "../constants/constants";

const initialState = {
  selectedProduct: [],
  isShowSelected: false,
};
export default function selectedProduct(state = initialState, action) {
  switch (action.type) {
    case constants.GET_SELECTED:
      return { ...state, selectedProduct: action.selected };
    case constants.SHOW_SELECTED:
      return { ...state, isShowSelected: true };
    case constants.HIDE_SELECTED:
      return { ...initialState };
    default:
      return state;
  }
}
