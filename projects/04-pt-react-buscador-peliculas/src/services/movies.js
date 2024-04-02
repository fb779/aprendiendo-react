const API_KEY = '4287ad07';
import { mappedMovies } from '../logic/mappedMovies.js';

export async function searchinMovies({ search }) {
  if (search == '') {
    return null;
  }

  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await resp.json();

    const movies = mappedMovies(data.Search);

    return movies;
  } catch (e) {
    throw new Error('Error searchin movies');
  }
}
