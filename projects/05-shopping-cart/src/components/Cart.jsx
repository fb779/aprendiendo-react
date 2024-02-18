import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';

export function Cart() {
  const { cart, addToCart, removeToCart, clearToCart } = useCart();
  const cardCheckboxId = useId();

  const totalResult = cart.reduce(
    (ac, { price, quantity }) =>
      // const { price, quantity } = cu;
      (ac += price * quantity),
    0
  );

  return (
    <>
      <label className='cart-button' htmlFor={cardCheckboxId}>
        <CartIcon></CartIcon>
      </label>
      <input id={cardCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <button onClick={() => clearToCart()}>
          <ClearCartIcon></ClearCartIcon>
        </button>
        <ul>
          {cart &&
            cart?.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
                removeToCart={() => removeToCart(product)}
              />
            ))}
        </ul>
        <section>total {totalResult}</section>
      </aside>
    </>
  );
}
