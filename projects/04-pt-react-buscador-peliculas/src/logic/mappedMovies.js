export function mappedMovies(movies) {
  return movies.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    };
  });
}
