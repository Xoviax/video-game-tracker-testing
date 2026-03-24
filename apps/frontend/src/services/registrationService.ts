/**
 * Validates the user's display name and returns an error message if invalid.
 * 
 * @param name - The display name string to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getDisplayNameError(name: string): string | undefined {
  const trimmedName = name.trim();
  
  const error = 
    trimmedName.length === 0 ? 'Display name is required.' :
    trimmedName.length < 2 ? 'Display name must be at least 2 characters.' :
    trimmedName.length > 20 ? 'Display name must be 20 characters or less.' :
    undefined;

  return error;
}

/**
 * Validates the user's email and returns an error message if invalid.
 * 
 * @param email - The email string to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getEmailError(email: string): string | undefined {
  const trimmedEmail = email.trim();
  
  const error =
    trimmedEmail.length === 0 ? 'Email is required.' :
    !/^\S+@\S+\.\S+$/.test(trimmedEmail) ? 'Enter a valid email address.' :
    undefined;

  return error;
}

/**
 * Validates a genre and returns an error message if invalid.
 * 
 * @param genre - The genre string to validate.
 * @param genres - The current list of genres to check for duplicates.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getGenreError(genre: string, genres: string[]): string | undefined {
  const trimmedGenre = genre.trim();
  
  const error =
    trimmedGenre.length === 0 ? 'Genre cannot be empty.' :
    genres.some((g) => g.toLowerCase() === trimmedGenre.toLowerCase()) ? 'Genre already added.' :
    trimmedGenre.length > 20 ? 'Genre must be 20 characters or less.' :
    undefined;

  return error;
}

/**
 * Adds a genre to the list if it's valid and not a duplicate (case-insensitive).
 * 
 * @param genres - The current list of genres.
 * @param newGenre - The genre to add.
 * @returns The updated genres array.
 */
export function addGenre(genres: string[], newGenre: string): string[] {
  const trimmedGenre = newGenre.trim();
  const isDuplicate = genres.some((genre) => genre.toLowerCase() === trimmedGenre.toLowerCase());
  
  return (!trimmedGenre || isDuplicate) ? genres : [...genres, trimmedGenre];
}

/**
 * Removes a genre from the list.
 * 
 * @param genres - The current list of genres.
 * @param genreToRemove - The genre to remove.
 * @returns The updated genres array.
 */
export function removeGenre(genres: string[], genreToRemove: string): string[] {
  return genres.filter((genre) => genre !== genreToRemove);
}

/**
 * Checks if the registration form is valid.
 * 
 * @param displayName - The display name to validate.
 * @param email - The email to validate.
 * @returns True if the form is valid (no errors).
 */
export function isFormValid(displayName: string, email: string): boolean {
  return !getDisplayNameError(displayName) && !getEmailError(email);
}

