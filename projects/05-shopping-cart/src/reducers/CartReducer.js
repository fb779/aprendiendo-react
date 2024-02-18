export const cartInitialState = [];

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_TO_CART: 'CLEAR_TO_CART',
};

export const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS.ADD_TO_CART]: ({ state, action }) => {
    const {
      payload: actionPayload,
      payload: { id },
    } = action;

    const productInCartIndex = state.findIndex((item) => item.id === id);

    // SI esta en el carrito
    if (productInCartIndex != -1) {
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      // const newProduct = {
      //   ...state[productInCartIndex],
      //   quantity: state[productInCartIndex].quantity + 1,
      // };

      // const newState = [
      //   ...state.slice(0, productInCartIndex),
      //   newProduct,
      //   ...state.slice(productInCartIndex + 1),
      // ];

      return newState;
    }

    // NO esta en el carrito
    return [...state, { ...actionPayload, quantity: 1 }];
  },
  [CART_ACTIONS.REMOVE_TO_CART]: ({ state, action }) => {
    const { id } = action.payload;

    const productInCartIndex = state.findIndex((item) => item.id === id);

    // SI esta en el carrito
    if (productInCartIndex != -1) {
      const newState = structuredClone(state);

      newState[productInCartIndex].quantity -= 1;

      if (newState[productInCartIndex].quantity <= 0) {
        return state.filter((el) => el.id != id);
      }

      return newState;
    }
    return state;
  },
  [CART_ACTIONS.REMOVE_FROM_CART]: ({ state, action }) => {
    const { id } = action.payload;
    return state.filter((el) => el.id != id);
  },
  [CART_ACTIONS.CLEAR_TO_CART]: () => {
    return cartInitialState;
  },
};

export function cartReducer(state, action) {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState({ state, action }) : state;
}
