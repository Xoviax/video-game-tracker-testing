import { useState, useEffect } from 'react';
import { gameRepository } from '../../repositories/gameRepository';
import type { VideoGame } from '../../data/video_games';

/**
 * Custom hook to manage video game data with async loading.
 * Handles fetching, loading states, and error management.
 *
 * @returns An object containing games array, loading state, error state, and utility functions.
 */
export function useGames() {
  const [games, setGames] = useState<VideoGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches all games from the repository.
   */
  const fetchGames = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await gameRepository.getAll();
      setGames(data);
    } catch (err) {
      setError('Failed to load games.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Effect hook to fetch games when the component mounts.
   */
  useEffect(() => {
    fetchGames();
  }, []);

  /**
   * Finds a game by ID from the loaded games.
   * For single game lookups, prefer using gameRepository.getById() directly.
   */
  const getGameById = (id: number): VideoGame | undefined => {
    return games.find((game) => game.id === id);
  };

  /**
   * Filters games by genre.
   */
  const getGamesByGenre = (genre: string): VideoGame[] => {
    return games.filter((g) => g.genre.includes(genre));
  };

  /**
   * Searches games by name (case-insensitive).
   */
  const searchGamesByName = (searchTerm: string): VideoGame[] => {
    const normalizedTerm = searchTerm.toLowerCase().trim();
    if (!normalizedTerm) {
      return games;
    }
    return games.filter((game) =>
      game.name.toLowerCase().includes(normalizedTerm)
    );
  };

  /**
   * Refetches games from the repository.
   */
  const refetch = () => fetchGames();

  return {
    games,
    isLoading,
    error,
    getGameById,
    getGamesByGenre,
    searchGamesByName,
    refetch,
  };
}