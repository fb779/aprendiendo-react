import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
  const { filters, updateFilterPrice, updateFilterCategory } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    updateFilterPrice(event.target.value);
  };

  const handleChangeCategory = (event) => {
    updateFilterCategory(event.target.value);
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}> Price</label>
        <input
          onChange={handleChangeMinPrice}
          type='range'
          id={minPriceFilterId}
          min='0'
          max='2000'
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select
          onChange={handleChangeCategory}
          name='category'
          id={categoryFilterId}
          value={filters.category}
        >
          <option value='all'>All</option>
          <option value='home-decoration'> home-decoration </option>
          <option value='laptops'> laptops </option>
          <option value='smartphones'> smartphones </option>
          <option value='fragrances'> fragrances </option>
          <option value='skincare'> skincare </option>
          <option value='groceries'> groceries </option>
          <option value='home-decoration'> home-decoration </option>
        </select>
      </div>
    </section>
  );
}
