// import { useState } from 'react';

import { useContext } from 'react';
import { FilterContext } from '../contex/filterContex';

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);

  const fiterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category == 'all' || product.category == filters.category)
    );
  };

  const updateFilterPrice = (value) => {
    // const newFilters = Object.assign({}, filters, { minPrice: value });
    // setFilters(newFilters);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  const updateFilterCategory = (value) => {
    // const newFilters = Object.assign({}, filters, { category: value });
    // setFilters(newFilters);
    setFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  return {
    filters,
    fiterProducts,
    updateFilterPrice,
    updateFilterCategory,
  };
}
