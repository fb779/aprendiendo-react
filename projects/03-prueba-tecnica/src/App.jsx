import { useState, useEffect } from "react";
import "./App.css";

const ENDPOINT_FIRST_API = `https://catfact.ninja/fact`;
const ENDPOINT_SECOND_API = `https://cataas.com/cat/says/`;

export function App() {
  const [fact, setSentence] = useState("");
  const [catUrl, setCatUrl] = useState("");

  // get the fact from the first endpoint
  useEffect(() => {
    fetch(ENDPOINT_FIRST_API)
      .then((res) => res.json())
      .then((data) => setSentence(data.fact));
  }, []);

  // get the first three words from the sentence
  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(" ", 3).join(" ");

    fetch(`${ENDPOINT_SECOND_API}${firstThreeWords}`).then((resp) => {
      const { url } = resp;
      setCatUrl(url);
    });
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>

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
