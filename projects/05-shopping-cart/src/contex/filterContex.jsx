import { createContext, useState } from 'react';

// 1. crear el contexto
export const FilterContext = createContext();

// 2. crear el provider
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
