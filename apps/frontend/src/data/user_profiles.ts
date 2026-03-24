/**
 * Defines the structure of a user profile within the application.
 * A user profile represents a player's account and preferences.
 */
export interface UserProfile {
  id: number;
  username: string;
  email: string;
  tagline: string;
  favoriteGenres: string[];
  createdAt: string;
}

/**
 * Test data: array of 10+ sample user profiles.
 * This data is used by the userProfileRepository instead of making external API calls.
 * In a future sprint, this will be replaced with database queries.
 */
export const userProfiles: UserProfile[] = [
  {
    id: 1,
    username: 'PixelRanger',
    email: 'pixel@example.com',
    tagline: 'Co-op first, speedruns second.',
    favoriteGenres: ['Action', 'RPG'],
    createdAt: '2025-11-15',
  },
  {
    id: 2,
    username: 'SilentHunter',
    email: 'silent@example.com',
    tagline: 'Stealth games are life.',
    favoriteGenres: ['Stealth', 'Thriller'],
    createdAt: '2025-10-20',
  },
  {
    id: 3,
    username: 'CasualGamer',
    email: 'casual@example.com',
    tagline: 'Here for the vibes.',
    favoriteGenres: ['Puzzle', 'Adventure'],
    createdAt: '2025-09-05',
  },
  {
    id: 4,
    username: 'CompetitivePro',
    email: 'competitive@example.com',
    tagline: 'Rank 1 or bust.',
    favoriteGenres: ['Fighting', 'Shooter'],
    createdAt: '2025-08-12',
  },
  {
    id: 5,
    username: 'StoryDiver',
    email: 'story@example.com',
    tagline: 'Plot twists > graphics.',
    favoriteGenres: ['RPG', 'Adventure'],
    createdAt: '2025-07-30',
  },
  {
    id: 6,
    username: 'NoLifeGamer',
    email: 'nolife@example.com',
    tagline: 'What is sleep?',
    favoriteGenres: ['Strategy', 'Simulation'],
    createdAt: '2025-06-18',
  },
  {
    id: 7,
    username: 'RetroFan',
    email: 'retro@example.com',
    tagline: 'Pixel art > ultra-realistic.',
    favoriteGenres: ['Platformer', 'Arcade'],
    createdAt: '2025-05-22',
  },
  {
    id: 8,
    username: 'CasualStreamer',
    email: 'streamer@example.com',
    tagline: 'Making games look easy since 2024.',
    favoriteGenres: ['Action', 'Racing'],
    createdAt: '2025-04-10',
  },
  {
    id: 9,
    username: 'PuzzleMaster',
    email: 'puzzle@example.com',
    tagline: 'Brain > brawn.',
    favoriteGenres: ['Puzzle', 'Turn-based'],
    createdAt: '2025-03-05',
  },
  {
    id: 10,
    username: 'SoulsLikeEnthusiast',
    email: 'soulslike@example.com',
    tagline: 'Pain is temporary, victory is forever.',
    favoriteGenres: ['RPG', 'Action'],
    createdAt: '2025-02-14',
  },
  {
    id: 11,
    username: 'IndieGameLover',
    email: 'indie@example.com',
    tagline: 'Supporting small devs with big dreams.',
    favoriteGenres: ['Adventure', 'Indie'],
    createdAt: '2025-01-28',
  },
];
