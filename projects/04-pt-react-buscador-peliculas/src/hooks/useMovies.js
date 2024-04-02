import { useCallback, useMemo, useRef, useState } from 'react';
import { searchinMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search == previusSearch.current) {
      return;
    }

    try {
      setLoading(true);
      previusSearch.current = search;
      const newMovies = await searchinMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  );

  // console.log(`valor del sort: ${sort}`);
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;

  return { movies: sortedMovies, loading, getMovies };
}
