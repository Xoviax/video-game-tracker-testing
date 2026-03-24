/**
 * Defines the structure of a Favorite record.
 * Represents the relationship between a user and a game they've favorited.
 */
export interface Favorite {
  id: number;
  userId: number;
  gameId: number;
  addedAt: string;
}
