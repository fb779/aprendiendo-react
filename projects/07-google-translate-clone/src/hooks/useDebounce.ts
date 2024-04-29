import { useEffect, useState } from 'react';

type Props = { value: T; delay: number };

export function useDebounce<T>({ value, delay = 500 }: Props) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    console.time('debounce');
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}
