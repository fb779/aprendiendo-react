import { createContext, useReducer } from 'react';
import {
  cartReducer,
  cartInitialState,
  CART_ACTIONS,
} from '../reducers/CartReducer';

export const CartContex = createContext();

export function Cartprovider({ children }) {
  const [state, dispatcher] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatcher({ type: CART_ACTIONS.ADD_TO_CART, payload: product });

  const removeToCart = (product) =>
    dispatcher({ type: CART_ACTIONS.REMOVE_TO_CART, payload: product });

  const removeFromCart = (product) =>
    dispatcher({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: product });

  const clearToCart = () => dispatcher({ type: CART_ACTIONS.CLEAR_TO_CART });

  return (
    <CartContex.Provider
      value={{
        cart: state,
        addToCart,
        removeToCart,
        removeFromCart,
        clearToCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}
