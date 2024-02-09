export function ListOfMovies({ movies = [] }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMovies() {
  return <p>No Movies Results</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
