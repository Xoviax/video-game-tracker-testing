import { useState, useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import GameCatalog from './GameCatalog';
import type { VideoGame } from '../../../data/video_games';

type SearchBrowseProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
  favorites: VideoGame[];
  onToggleFavorite: (game: VideoGame) => void;
};

/**
 * Renders the search and browse games page, including a shared visits counter,
 * search input, and a catalog of games with favorite toggling functionality.
 * 
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * @param favorites - List of favorite video games.
 * @param onToggleFavorite - Function to toggle a game's favorite status.
 * 
 * @returns The SearchBrowse component.
 */
function SearchBrowse({ visits, setVisits, favorites, onToggleFavorite }: SearchBrowseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false); // Start hidden, fade in on render
  const hasUserTyped = useRef(false); // Tracks if user has typed to skip initial debounce

  // Fade in on initial render
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Debounce the search term - waits 300ms after user stops typing
  // Then triggers fade-out, updates search, and fades back in
  useEffect(() => {
    // Skip until user has typed
    if (!hasUserTyped.current) {
      return;
    }

    const timer = setTimeout(() => {
      const trimmed = searchTerm.trim();
      if (trimmed.length >= 2 || trimmed.length === 0) {
        // Start fade-out
        setIsVisible(false);
        // After fade-out completes (150ms), update search results
        setTimeout(() => {
          setDebouncedSearch(trimmed);
          // Small delay then fade back in
          setTimeout(() => setIsVisible(true), 50);
        }, 150);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    hasUserTyped.current = true;
    setSearchTerm(event.target.value);
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-white">Search & Browse Games</h1>
      
      <div className="space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visits}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={() => setVisits((current) => current + 1)}
        >
          Add visit
        </button>
      </div>

      <form
        className="mx-auto flex w-full max-w-xl flex-col gap-3 text-left sm:flex-row sm:items-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="w-full">
          <span className="sr-only">Search games</span>
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by game name"
            className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
          />
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="rounded-md border border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 hover:border-neutral-500"
          >
            Clear
          </button>
        </div>
      </form>

      <div 
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Fade effect on load and search changes
      >
        <GameCatalog searchTerm={debouncedSearch} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      </div>
    </div>
  );
}

export default SearchBrowse;