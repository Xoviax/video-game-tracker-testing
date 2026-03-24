import { videoGames } from '../data/videoGames.js';
import type { VideoGame } from '../data/videoGames.js';

const gameService = {
  getAllGames: async (): Promise<VideoGame[]> => {
    return videoGames;
  },

  createGame: async (game: VideoGame): Promise<VideoGame | null> => {
    const existingGame = videoGames.find((g) => g.id === game.id);

    if (existingGame) {
      return null;
    }

    videoGames.push(game);
    return game;
  },

  getGameById: async (gameId: number): Promise<VideoGame | null> => {
    const game = videoGames.find((g) => g.id === gameId);
    return game || null;
  },

  searchGames: async (query: string): Promise<VideoGame[]> => {
    const lowerQuery = query.toLowerCase();
    return videoGames.filter(
      (game) =>
        game.name.toLowerCase().includes(lowerQuery) ||
        game.developer.toLowerCase().includes(lowerQuery) ||
        game.genre.some((g) => g.toLowerCase().includes(lowerQuery))
    );
  },
};

export default gameService;
