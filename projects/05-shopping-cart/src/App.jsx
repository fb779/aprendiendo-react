import { useState } from 'react';
import { useFilters } from './hooks/useFilters.js';
import { products as initialProducts } from './mocks/products.json';
import { IS_DEVELOPMENT } from './config.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Products } from './components/Products';
import { Cart } from './components/Cart.jsx';
import { Cartprovider } from './contex/cartContext.jsx';

function App() {
  const [products] = useState(initialProducts);

  const { fiterProducts } = useFilters();

  const filteredProducts = fiterProducts(products);

  return (
    <Cartprovider>
      <Header />

      <Cart></Cart>

      <Products products={filteredProducts} />

      {IS_DEVELOPMENT && <Footer />}
    </Cartprovider>
  );
}

export default App;
