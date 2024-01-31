import { useState, useEffect } from "react";
import "./App.css";
import { getFact, getImageUrl } from "./services/Service";

export function App() {
  const [fact, setFact] = useState("");
  const [catUrl, setCatUrl] = useState("");

  // get the fact from the first endpoint
  useEffect(() => {
    getFact().then((newFact) => setFact(newFact));
  }, []);

  // get the first three words from the sentence
  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(" ", 3).join(" ");
    getImageUrl(firstThreeWords).then((newCatUrl) => setCatUrl(newCatUrl));
  }, [fact]);

  const hadleClick = () => {
    getFact().then(setFact);
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
