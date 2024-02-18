import { Filters } from './Filters.jsx';
import { CartIcon } from './Icons.jsx';

export function Header() {
  return (
    <>
      <h1>
        React Shoop <CartIcon></CartIcon>
      </h1>
      <Filters />
    </>
  );
}
