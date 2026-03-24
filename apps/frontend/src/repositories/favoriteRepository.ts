import { favorites } from '../data/favorites';
import type { Favorite } from '../types/Favorite';

/**
 * In-memory store for favorites data.
 * This allows mutations during the session while using test data.
 * Will be replaced with actual API calls in a future sprint.
 */
let favoritesStore: Favorite[] = [...favorites];

/**
 * Simulates network delay for realistic async behavior.
 * @param ms - Milliseconds to delay (default 100ms)
 */
const delay = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Repository for Favorite data access.
 * Provides CRUD operations for user game favorites.
 * Currently uses local test data, structured for easy swap to API.
 */
export const favoriteRepository = {
  /**
   * Retrieves all favorites.
   * @returns Promise resolving to array of all favorites.
   */
  getAll: async (): Promise<Favorite[]> => {
    await delay();
    return [...favoritesStore];
  },

  /**
   * Retrieves a single favorite by ID.
   * @param id - The unique identifier of the favorite.
   * @returns Promise resolving to the favorite, or undefined if not found.
   */
  getById: async (id: number): Promise<Favorite | undefined> => {
    await delay();
    return favoritesStore.find((f) => f.id === id);
  },

  /**
   * Retrieves all favorites for a specific user.
   * @param userId - The ID of the user.
   * @returns Promise resolving to array of user's favorites.
   */
  getByUserId: async (userId: number): Promise<Favorite[]> => {
    await delay();
    return favoritesStore.filter((f) => f.userId === userId);
  },

  /**
   * Checks if a user has favorited a specific game.
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game.
   * @returns Promise resolving to the favorite if exists, undefined otherwise.
   */
  getByUserAndGame: async (
    userId: number,
    gameId: number
  ): Promise<Favorite | undefined> => {
    await delay();
    return favoritesStore.find((f) => f.userId === userId && f.gameId === gameId);
  },

  /**
   * Creates a new favorite record.
   * @param favorite - The favorite data without ID (ID is auto-generated).
   * @returns Promise resolving to the newly created favorite with assigned ID.
   */
  create: async (favorite: Omit<Favorite, 'id'>): Promise<Favorite> => {
    await delay();
    const newFavorite: Favorite = {
      ...favorite,
      id: Math.max(0, ...favoritesStore.map((f) => f.id)) + 1,
    };
    favoritesStore.push(newFavorite);
    return newFavorite;
  },

  /**
   * Deletes a favorite by ID.
   * @param id - The ID of the favorite to delete.
   * @returns Promise resolving to true if deleted, false if not found.
   */
  delete: async (id: number): Promise<boolean> => {
    await delay();
    const index = favoritesStore.findIndex((f) => f.id === id);
    if (index === -1) return false;
    favoritesStore.splice(index, 1);
    return true;
  },

  /**
   * Deletes a favorite by user ID and game ID.
   * @param userId - The ID of the user.
   * @param gameId - The ID of the game.
   * @returns Promise resolving to true if deleted, false if not found.
   */
  deleteByUserAndGame: async (userId: number, gameId: number): Promise<boolean> => {
    await delay();
    const index = favoritesStore.findIndex(
      (f) => f.userId === userId && f.gameId === gameId
    );
    if (index === -1) return false;
    favoritesStore.splice(index, 1);
    return true;
  },

  /**
   * Resets the store to initial test data.
   */
  reset: async (): Promise<void> => {
    await delay();
    favoritesStore = [...favorites];
  },
};
