import {IProductState} from "../state/product.state";
import {initialCartState} from "../state/cart.state";
import {CartActions, ECartActions} from "../actions/cart.actions";

export const cartReducers = (
  state = initialCartState,
  action: CartActions
): IProductState => {
  switch (action.type) {

    case ECartActions.RemoveCartItemSuccess: {
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload)
      };
    }

    case ECartActions.PlaceOrderSuccess: {
      return {
        ...state,
        products: []
      };
    }

    case ECartActions.LoadCartItemsSuccess: {
      return {
        ...state,
        products: action.payload
      }
    }

    default:
      return state;
  }
};