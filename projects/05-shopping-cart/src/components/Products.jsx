import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import './Products.css';

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((el) => el.id === product.id);
  };

  return (
    <main className='products'>
      <ul>
        {products &&
          products?.map((product) => {
            const isproductInCart = checkProductInCart(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>${product.price}</p>
                </div>
                <div>
                  <button
                    className={isproductInCart ? 'removeFromCart' : 'addToCart'}
                    onClick={() => {
                      isproductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}>
                    {isproductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
