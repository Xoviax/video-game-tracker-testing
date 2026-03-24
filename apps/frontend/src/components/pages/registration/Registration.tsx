import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  getDisplayNameError,
  getEmailError,
  getGenreError,
  addGenre,
  removeGenre,
  isFormValid,
} from '../../../services/registrationService';
import { useUserProfiles } from '../../../hooks/useUserProfiles/useUserProfiles';

type RegistrationProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
};

type RegistrationFormState = {
  displayName: string;
  email: string;
  tagline: string;
};

type RegistrationFormProps = {
  formState: RegistrationFormState;
  setFormState: Dispatch<SetStateAction<RegistrationFormState>>;
  errors: {
    displayName?: string;
    email?: string;
  };
};

/**
 * Renders the registration form for creating a player profile. This includes
 * fields for display name, email, and an optional tagline, along with
 * validation error messages.
 * 
 * @param formState - The current state of the registration form.
 * @param setFormState - Function to update the registration form state.
 * @param errors - Validation error messages for the form fields.
 * 
 * @returns The RegistrationForm component.
 */

function RegistrationForm({ formState, setFormState, errors }: RegistrationFormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-200" htmlFor="displayName">
          Display name
        </label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          value={formState.displayName}
          onChange={handleChange}
          placeholder="e.g. PixelRanger"
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-neutral-400 focus:outline-none"
        />
        {errors.displayName ? <p className="text-xs text-rose-300">{errors.displayName}</p> : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-neutral-400 focus:outline-none"
        />
        {errors.email ? <p className="text-xs text-rose-300">{errors.email}</p> : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-200" htmlFor="tagline">
          Tagline (optional)
        </label>
        <input
          id="tagline"
          name="tagline"
          type="text"
          value={formState.tagline}
          onChange={handleChange}
          placeholder="Co-op first, leaderboard second."
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-neutral-400 focus:outline-none"
        />
      </div>
    </div>
  );
}

/**
 * Renders the registration page, allowing users to create a player profile
 * with a display name, email, tagline, and favorite genres. Also includes
 * a shared visits counter.
 * 
 * ARCHITECTURE: This component demonstrates the full stack:
 * 1. It invokes the `useUserProfiles` custom hook (which manages state)
 * 2. The hook calls `profileService.create()` (which handles business logic)
 * 3. The service calls `userProfileRepository.create()` (which accesses/persists data)
 * 4. The repository uses test data from `user_profiles.ts` (which will be a database later)
 * 
 * Concerns are properly separated:
 * - COMPONENT: handles UI rendering and user input
 * - HOOK: manages loading state and data synchronization
 * - SERVICE: applies business rules (validation, transformations)
 * - REPOSITORY: abstracts data access (test data now, API later)
 * - DATA: defines the shape of user profiles
 * 
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * 
 * @returns The Registration component.
 */

function Registration({ visits, setVisits }: RegistrationProps) {
  // Hook provides createProfile method and loading state for the architecture chain
  const { createProfile } = useUserProfiles();

  const [formState, setFormState] = useState<RegistrationFormState>({
    displayName: '',
    email: '',
    tagline: '',
  });
  const [newGenre, setNewGenre] = useState('');
  const [favoriteGenres, setFavoriteGenres] = useState<string[]>(['Action', 'RPG']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayNameError = getDisplayNameError(formState.displayName);
  const emailError = getEmailError(formState.email);
  const genreError = getGenreError(newGenre, favoriteGenres);

  const handleAddGenre = () => {
    if (!genreError) {
      setFavoriteGenres((current) => addGenre(current, newGenre));
      setNewGenre('');
    }
  };

  const handleRemoveGenre = (genreToRemove: string) => {
    setFavoriteGenres((current) => removeGenre(current, genreToRemove));
  };

  /**
   * Handles account creation by calling the useUserProfiles hook's createProfile method.
   * This kicks off the chain: hook → service → repository → storage
   */
  const handleCreateAccount = async () => {
    setIsSubmitting(true);
    try {
      await createProfile({
        username: formState.displayName.trim(),
        email: formState.email.trim(),
        tagline: formState.tagline.trim(),
        favoriteGenres,
        createdAt: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      });
      // Success! In a real app, you'd navigate or show a success message
      alert('Profile created successfully!');
      // Reset the form
      setFormState({ displayName: '', email: '', tagline: '' });
      setFavoriteGenres(['Action', 'RPG']);
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Failed to create profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Registration</h1>
        <p className="text-neutral-400">
          Build a player card and customize the genres you want to see first.
        </p>
      </header>

      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visits}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={() => setVisits((current) => current + 1)}
        >
          Add visit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-xl font-semibold text-white">Create your player profile</h2>
            <p className="text-sm text-neutral-400">
              These fields update the preview instantly.
            </p>
          </div>

          <RegistrationForm
            formState={formState}
            setFormState={setFormState}
            errors={{ displayName: displayNameError, email: emailError }}
          />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Favorite genres</h3>
              <p className="text-sm text-neutral-400">
                Add the genres you want to see highlighted in your feed.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <input
                  type="text"
                  value={newGenre}
                  onChange={(event) => setNewGenre(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleAddGenre();
                    }
                  }}
                  placeholder="Add genre"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-neutral-400 focus:outline-none"
                />
                {newGenre.trim().length > 0 && genreError ? (
                  <p className="text-xs text-rose-300 mt-1">{genreError}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={handleAddGenre}
                disabled={!!genreError}
                className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-300"
              >
                Add genre
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {favoriteGenres.length === 0 ? (
                <p className="text-sm text-neutral-500">No genres yet. Add one above.</p>
              ) : (
                favoriteGenres.map((genre) => (
                  <div
                    key={genre}
                    className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-sm text-neutral-200"
                  >
                    <span>{genre}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveGenre(genre)}
                      className="text-neutral-400 hover:text-neutral-100"
                      aria-label={`Remove ${genre}`}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-4">
          <h2 className="text-xl font-semibold text-white">Live preview</h2>
          <div className="space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Player</p>
              <p className="text-lg font-semibold text-white">
                {formState.displayName.trim().length > 0 ? formState.displayName.trim() : 'New Player'}
              </p>
              <p className="text-sm text-neutral-400">
                {formState.tagline.trim().length > 0
                  ? formState.tagline
                  : 'No tagline yet. Add something memorable!'}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Contact</p>
              <p className="text-sm text-neutral-200">
                {formState.email.trim().length > 0 ? formState.email.trim() : 'No email provided'}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Genre focus</p>
              <div className="flex flex-wrap gap-2">
                {favoriteGenres.length === 0 ? (
                  <span className="text-sm text-neutral-500">Add at least one genre.</span>
                ) : (
                  favoriteGenres.map((genre) => (
                    <span
                      key={`preview-${genre}`}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200"
                    >
                      {genre}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCreateAccount}
            disabled={!isFormValid(formState.displayName, formState.email) || isSubmitting}
            className="w-full px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-300"
          >
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Registration;
