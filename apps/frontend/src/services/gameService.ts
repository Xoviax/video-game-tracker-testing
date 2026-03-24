import { videoGames, type VideoGame } from '../data/video_games';

/**
 * Formats a date string to a readable format (e.g., "Feb 25th, 2022").
 * 
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
export function formatReleaseDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  const getSuffix = (n: number): string => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${month} ${day}${getSuffix(day)}, ${year}`;
}

/**
 * Retrieves all video games.
 * 
 * @returns An array of all video games.
 */
export function getAllGames(): VideoGame[] {
  return videoGames;
}

/**
 * Finds a video game by its ID.
 * 
 * @param id - The ID of the game to find.
 * @returns The video game if found, or undefined.
 */
export function getGameById(id: number): VideoGame | undefined {
  return videoGames.find((game) => game.id === id);
}

/**
 * Searches for video games by name (case-insensitive).
 * 
 * @param searchTerm - The search term to filter games by.
 * @returns An array of matching video games.
 */
export function searchGames(searchTerm: string): VideoGame[] {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  if (!normalizedTerm) {
    return videoGames;
  }
  return videoGames.filter((game) =>
    game.name.toLowerCase().includes(normalizedTerm)
  );
}

/**
 * Gets a random sample of video games.
 * 
 * @param games - The array of games to sample from.
 * @param count - The number of games to return.
 * @returns A shuffled array of games, limited to the specified count.
 */
export function getRandomSample(games: VideoGame[], count: number): VideoGame[] {
  const shuffled = [...games].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Sorts games alphabetically by name (case-insensitive).
 * 
 * @param games - The array of games to sort.
 * @returns A new array sorted alphabetically by name.
 */
export function sortAlphabetically(games: VideoGame[]): VideoGame[] {
  return [...games].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
}

/**
 * Checks if a game is in a favorites list.
 * 
 * @param gameId - The ID of the game to check.
 * @param favorites - The array of favorite games.
 * @returns True if the game is in favorites.
 */
export function isGameFavorite(gameId: number, favorites: VideoGame[]): boolean {
  return favorites.some((f) => f.id === gameId);
}

/**
 * Gets games that are not in the favorites list.
 * 
 * @param favorites - The array of favorite games.
 * @returns Games that are available to add to favorites.
 */
export function getAvailableGames(favorites: VideoGame[]): VideoGame[] {
  return videoGames.filter((game) => !favorites.some((f) => f.id === game.id));
}
