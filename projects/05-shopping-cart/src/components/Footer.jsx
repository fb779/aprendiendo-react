import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';

import './Footer.css';

export function Footer() {
  const { cart } = useCart();
  const { filters } = useFilters();

  return (
    // <footer className='footer'>

    // </footer>

    <footer className='footer'>
      <h4>
        Prueba técnica de React ⚛️ － <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {/* {`Filters: ${JSON.stringify(filters, null, 2)} `} */}
      {/* {`Cart: ${JSON.stringify(
        cart.map(({ id, title, quantity }) => {
          return {
            id,
            title,
            quantity,
          };
        }),
        null,
        2
      )} `} */}
    </footer>
  );
}
