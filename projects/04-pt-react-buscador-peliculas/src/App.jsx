import { useCallback, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/movies";
import debounceit from "just-debounce-it";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetmovies = useCallback(
    debounceit((search) => {
      getMovies({ search });
    }, 3000),
    []
  );
  // const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    // getMovies({ search: newSearch });
    debouncedGetmovies(newSearch);
  };

  const handleSort = () => {
    // console.log(sort);
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            type="text"
            name="search"
            placeholder="Avengers, Matrix, SuperMan, MArio Bros, ...."
            value={search}
            onChange={handleChange}
          />

          <input
            type="checkbox"
            name="sorted"
            onChange={handleSort}
            checked={sort}
          />

          <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>loading</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
