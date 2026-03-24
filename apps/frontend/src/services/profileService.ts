import { userProfileRepository } from '../repositories/userProfileRepository';
import type { UserProfile } from '../data/user_profiles';

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Maximum allowed length for user bio.
 */
export const MAX_BIO_LENGTH = 500;

/**
 * Maximum file size for avatar upload in bytes (2MB).
 */
export const MAX_AVATAR_SIZE = 2 * 1024 * 1024;

/**
 * Allowed image types for avatar upload.
 */
export const ALLOWED_AVATAR_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validates the user's bio and returns an error message if invalid.
 *
 * @param bio - The bio string to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getBioError(bio: string): string | undefined {
  if (bio.length > MAX_BIO_LENGTH) {
    return `Bio must be ${MAX_BIO_LENGTH} characters or less.`;
  }
  return undefined;
}

/**
 * Validates an avatar file and returns an error message if invalid.
 *
 * @param file - The file to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getAvatarError(file: File): string | undefined {
  if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
    return 'Please upload a valid image (JPEG, PNG, GIF, or WebP).';
  }
  if (file.size > MAX_AVATAR_SIZE) {
    return 'Image must be 2MB or smaller.';
  }
  return undefined;
}

/**
 * Checks if the profile data is valid for saving.
 *
 * @param bio - The bio to validate.
 * @returns True if the profile is valid (no errors).
 */
export function isProfileValid(bio: string): boolean {
  return !getBioError(bio);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Reads an image file and converts it to a data URL.
 *
 * @param file - The image file to read.
 * @returns A promise that resolves with the data URL string.
 */
export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as data URL.'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

/**
 * Truncates a bio to the maximum allowed length.
 *
 * @param bio - The bio string to truncate.
 * @returns The truncated bio string.
 */
export function truncateBio(bio: string): string {
  return bio.slice(0, MAX_BIO_LENGTH);
}

// ============================================================================
// CRUD SERVICE (Repository Integration)
// ============================================================================

/**
 * Service that handles business logic for user profile operations.
 * Acts as a middleman between components/hooks and the repository,
 * allowing for validation, transformation, or other business rules before
 * data is accessed or stored.
 */
export const profileService = {
  /**
   * Retrieves all user profiles from the repository.
   *
   * @returns A promise resolving to an array of all user profiles.
   */
  getAll: async (): Promise<UserProfile[]> => {
    return userProfileRepository.getAll();
  },

  /**
   * Retrieves a single user profile by ID.
   *
   * @param id - The unique identifier of the user profile.
   * @returns A promise resolving to the user profile, or undefined if not found.
   */
  getById: async (id: number): Promise<UserProfile | undefined> => {
    return userProfileRepository.getById(id);
  },

  /**
   * Creates a new user profile with the provided data.
   *
   * @param profile - The user profile data to create (without ID).
   * @returns A promise resolving to the newly created profile with an assigned ID.
   */
  create: async (profile: Omit<UserProfile, 'id'>): Promise<UserProfile> => {
    return userProfileRepository.create(profile);
  },

  /**
   * Updates an existing user profile.
   *
   * @param id - The unique identifier of the profile to update.
   * @param updates - The fields to update.
   * @returns A promise resolving to the updated profile, or undefined if not found.
   */
  update: async (
    id: number,
    updates: Partial<Omit<UserProfile, 'id'>>
  ): Promise<UserProfile | undefined> => {
    return userProfileRepository.update(id, updates);
  },

  /**
   * Deletes a user profile by ID.
   *
   * @param id - The unique identifier of the profile to delete.
   * @returns A promise resolving to true if deleted, false if not found.
   */
  delete: async (id: number): Promise<boolean> => {
    return userProfileRepository.delete(id);
  },
};
