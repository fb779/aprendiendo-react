import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import "./App.css";

export function App() {
  const { fact, refreshFact } = useCatFact();

  const { catUrl } = useCatImage({ fact });

  const hadleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <button onClick={hadleClick}>Refresh the cat</button>
      </section>
      {fact && (
        <section>
          <p>{fact}</p>
          <img
            src={`${catUrl}`}
            alt={`Image getting from API wit the ${fact}`}
          />
        </section>
      )}
    </main>
  );
}
