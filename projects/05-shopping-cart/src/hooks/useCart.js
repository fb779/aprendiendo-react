import { useContext } from 'react';
import { CartContex } from '../contex/cartContext';

export function useCart() {
  const context = useContext(CartContex);

  if (context === undefined) {
    throw new Error('UserCart must be used within a cartprovider');
  }

  return context;
}
