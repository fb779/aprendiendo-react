import { useEffect, useState } from 'react';
import { getFact } from '../services/Service';

export function useCatFact() {
  const [fact, setFact] = useState('');

  const refreshFact = () => {
    getFact().then((newFact) => setFact(newFact));
  };

  // get the fact from the first endpoint
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
