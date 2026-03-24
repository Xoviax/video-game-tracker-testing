import type { VideoGame } from '../data/video_games';
import type { Favorite } from '../types/Favorite';

// Response types matching backend format
type GamesResponseJSON = { message: string; data: VideoGame[] };
type GameResponseJSON = { message: string; data: VideoGame };
type FavoritesResponseJSON = { message: string; data: Favorite[] };
type FavoriteResponseJSON = { message: string; data: Favorite };

// Base URL from environment variable (Vite exposes via import.meta.env)
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

// ============ Games ============

export async function fetchGames(): Promise<VideoGame[]> {
  const response: Response = await fetch(`${BASE_URL}/games`);

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  const json: GamesResponseJSON = await response.json();
  return json.data;
}

export async function getGameById(gameId: number): Promise<VideoGame> {
  const response: Response = await fetch(`${BASE_URL}/games/${gameId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch game with id ${gameId}`);
  }

  const json: GameResponseJSON = await response.json();
  return json.data;
}

// ============ Favorites ============

export async function fetchFavorites(userId: number): Promise<Favorite[]> {
  const response: Response = await fetch(`${BASE_URL}/favorites/${userId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch favorites for user ${userId}`);
  }

  const json: FavoritesResponseJSON = await response.json();
  return json.data;
}

export async function addFavorite(userId: number, gameId: number): Promise<Favorite> {
  const response: Response = await fetch(`${BASE_URL}/favorites`, {
    method: 'POST',
    body: JSON.stringify({ userId, gameId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to add favorite`);
  }

  const json: FavoriteResponseJSON = await response.json();
  return json.data;
}

export async function removeFavorite(userId: number, gameId: number): Promise<void> {
  const response: Response = await fetch(`${BASE_URL}/favorites/${userId}/${gameId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to remove favorite`);
  }
}
