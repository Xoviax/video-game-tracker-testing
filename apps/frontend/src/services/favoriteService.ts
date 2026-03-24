import { favoriteRepository } from '../repositories/favoriteRepository';
import { gameRepository } from '../repositories/gameRepository';
import type { Favorite } from '../types/Favorite';
import type { VideoGame } from '../data/video_games';

/**
 * Service that handles business logic for favorite operations.
 */
export const favoriteService = {
  /**
   * Gets all favorite game records for a user, with full game data.
   * 
   * @param userId - The ID of the user.
   * @returns Promise resolving to array of VideoGame objects.
   */
  getUserFavoriteGames: async (userId: number): Promise<VideoGame[]> => {
    const userFavorites = await favoriteRepository.getByUserId(userId);
    const allGames = await gameRepository.getAll();
    
    // Map favorite records to full game objects
    const favoriteGames: VideoGame[] = [];
    for (const fav of userFavorites) {
      const game = allGames.find((g) => g.id === fav.gameId);
      if (game) {
        favoriteGames.push(game);
      }
    }
    
    return favoriteGames;
  },

  /**
   * Checks if a specific game is favorited by a user.
   * 
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game.
   * @returns Promise resolving to true if favorited, false otherwise.
   */
  isFavorite: async (userId: number, gameId: number): Promise<boolean> => {
    const existing = await favoriteRepository.getByUserAndGame(userId, gameId);
    return existing !== undefined;
  },

  /**
   * Adds a game to user's favorites.
   * Validates that the game exists and isn't already favorited.
   * 
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game to favorite.
   * @returns Promise resolving to the created Favorite record.
   * @throws Error if game doesn't exist or is already favorited.
   */
  addFavorite: async (userId: number, gameId: number): Promise<Favorite> => {
    // Check if game exists
    const game = await gameRepository.getById(gameId);
    if (!game) {
      throw new Error('Game not found.');
    }

    // Prevent duplicate favorites
    const existing = await favoriteRepository.getByUserAndGame(userId, gameId);
    if (existing) {
      throw new Error('Game is already in favorites.');
    }

    // Create the favorite record
    return favoriteRepository.create({
      userId,
      gameId,
      addedAt: new Date().toISOString(),
    });
  },

  /**
   * Removes a game from user's favorites.
   * 
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game to unfavorite.
   * @returns Promise resolving to true if removed, false if wasn't favorited.
   */
  removeFavorite: async (userId: number, gameId: number): Promise<boolean> => {
    return favoriteRepository.deleteByUserAndGame(userId, gameId);
  },

  /**
   * Toggles a game's favorite status for a user.
   * If favorited, removes it. If not favorited, adds it.
   * 
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game.
   * @returns Promise resolving to object with action taken and current status.
   */
  toggleFavorite: async (
    userId: number,
    gameId: number
  ): Promise<{ action: 'added' | 'removed'; isFavorite: boolean }> => {
    const existing = await favoriteRepository.getByUserAndGame(userId, gameId);
    
    if (existing) {
      await favoriteRepository.delete(existing.id);
      return { action: 'removed', isFavorite: false };
    } else {
      // Validate game exists before adding
      const game = await gameRepository.getById(gameId);
      if (!game) {
        throw new Error('Game not found.');
      }
      
      await favoriteRepository.create({
        userId,
        gameId,
        addedAt: new Date().toISOString(),
      });
      return { action: 'added', isFavorite: true };
    }
  },

  /**
   * Gets the count of favorites for a user.
   * 
   * @param userId - The ID of the user.
   * @returns Promise resolving to the number of favorites.
   */
  getFavoriteCount: async (userId: number): Promise<number> => {
    const favorites = await favoriteRepository.getByUserId(userId);
    return favorites.length;
  },
};
