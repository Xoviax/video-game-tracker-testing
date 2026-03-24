import { useState, useEffect } from 'react';
import { profileService } from '../../services/profileService';
import type { UserProfile } from '../../data/user_profiles';

/**
 * Custom hook to manage user profiles in a component.
 * Fetches all profiles on mount via the profileService, which calls the repository.
 * Provides loading state and the list of profiles for the component to render.
 *
 * @returns An object with the profiles array and a loading flag.
 */
export function useUserProfiles() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all profiles when the hook is first used
  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const data = await profileService.getAll();
        setProfiles(data);
      } catch (error) {
        console.error('Failed to load user profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfiles();
  }, []);

  /**
   * Creates a new user profile by calling the profileService.
   * This is what the Registration component calls when the user submits the form.
   */
  const createProfile = async (profileData: Omit<UserProfile, 'id'>) => {
    try {
      const newProfile = await profileService.create(profileData);
      // Update the local list to include the newly created profile
      setProfiles(prev => [...prev, newProfile]);
      return newProfile;
    } catch (error) {
      console.error('Failed to create user profile:', error);
      throw error;
    }
  };

  /**
   * Updates an existing user profile by calling the profileService.
   */
  const updateProfile = async (id: number, updates: Partial<Omit<UserProfile, 'id'>>) => {
    try {
      const updated = await profileService.update(id, updates);
      if (updated) {
        // Update the local list with the modified profile
        setProfiles(prev =>
          prev.map(p => (p.id === id ? updated : p))
        );
      }
      return updated;
    } catch (error) {
      console.error('Failed to update user profile:', error);
      throw error;
    }
  };

  /**
   * Deletes a user profile by calling the profileService.
   */
  const deleteProfile = async (id: number) => {
    try {
      const success = await profileService.delete(id);
      if (success) {
        // Remove the deleted profile from the local list
        setProfiles(prev => prev.filter(p => p.id !== id));
      }
      return success;
    } catch (error) {
      console.error('Failed to delete user profile:', error);
      throw error;
    }
  };

  return {
    profiles,
    loading,
    createProfile,
    updateProfile,
    deleteProfile,
  };
}
