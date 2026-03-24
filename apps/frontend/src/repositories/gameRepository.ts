import { fetchGames, getGameById as fetchGameById } from '../apis/client';
import type { VideoGame } from '../data/video_games';

/**
 * Repository for accessing VideoGame data from the backend API.
 */
export const gameRepository = {
  getAll: async (): Promise<VideoGame[]> => {
    return await fetchGames();
  },

  // Returns a single game by ID
  getById: async (id: number): Promise<VideoGame | undefined> => {
    return await fetchGameById(id);
  }
};