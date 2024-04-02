import { useEffect, useState } from 'react';
import { getImageUrl } from '../services/Service';

export function useCatImage({ fact }) {
  const [catUrl, setCatUrl] = useState('');

  // get the first three words from the sentence
  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(' ', 3).join(' ');
    getImageUrl(firstThreeWords).then((newCatUrl) => setCatUrl(newCatUrl));
  }, [fact]);

  return { catUrl };
}
