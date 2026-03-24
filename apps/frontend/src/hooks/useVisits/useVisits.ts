import { useState } from 'react';

/**
 * Custom hook to manage the user's visit count.
 *
 * @returns An object containing the current visit count, the setter function, and a simple increment function.
 */
export function useVisits() {
  const [visitCount, setVisitCount] = useState(0);

  const incrementVisits = () => {
    setVisitCount((prev) => prev + 1);
  };

  return {
    visitCount,
    setVisitCount,
    incrementVisits
  } as const;
}