import { useEffect, useRef, useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true); // guarda una referencia apesar de la renderizacion

  const updateSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search == '';
      return;
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero');
      return;
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
