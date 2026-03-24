import { useState, useEffect, useCallback } from "react";
import { favoriteService } from "../../services/favoriteService";
import type { VideoGame } from "../../data/video_games";

/**
 * Custom hook to manage the user's favorite video games.
 * Note: Uses a hardcoded userId (1) since authentication isn't implemented yet.
 *
 * @returns An object containing favorites state, toggle function, and status indicators.
 */
export function useFavorites() {
  // Hardcoded user ID - would come from auth context in a real app
  const userId = 1;

  const [favorites, setFavorites] = useState<VideoGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches the user's favorite games from the service layer.
   */
  const fetchFavorites = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const userFavorites = await favoriteService.getUserFavoriteGames(userId);
      setFavorites(userFavorites);
    } catch (err) {
      setError("Failed to load favorites.");
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  /**
   * Load favorites on mount.
   */
  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  /**
   * Toggles a game's favorite status.
   * Uses optimistic updates for responsive UI, then syncs with backend.
   *
   * @param game - The video game object to toggle.
   */
  const toggleFavorite = useCallback(
    async (game: VideoGame) => {
      // Optimistic update - immediately update UI
      const isCurrentlyFavorite = favorites.some((f) => f.id === game.id);
      
      if (isCurrentlyFavorite) {
        setFavorites((prev) => prev.filter((f) => f.id !== game.id));
      } else {
        setFavorites((prev) => [...prev, game]);
      }

      try {
        // Sync with backend via service layer
        await favoriteService.toggleFavorite(userId, game.id);
      } catch (err) {
        // Revert optimistic update on error
        if (isCurrentlyFavorite) {
          setFavorites((prev) => [...prev, game]);
        } else {
          setFavorites((prev) => prev.filter((f) => f.id !== game.id));
        }
        setError("Failed to update favorite.");
      }
    },
    [favorites, userId]
  );

  /**
   * Checks if a game is in the favorites list.
   *
   * @param gameId - The ID of the game to check.
   * @returns True if the game is a favorite, false otherwise.
   */
  const isFavorite = useCallback(
    (gameId: number): boolean => {
      return favorites.some((f) => f.id === gameId);
    },
    [favorites]
  );

  /**
   * Manually refetch favorites from the service.
   */
  const refetch = useCallback(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoading,
    error,
    refetch,
  };
}
