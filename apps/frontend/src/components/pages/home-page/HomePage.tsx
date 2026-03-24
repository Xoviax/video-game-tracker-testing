import { useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { getAllGames, getRandomSample } from '../../../services/gameService';
import GameCard from '../../common/game-card/GameCard';

type HomePageProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
};

/**
 * Renders the home page, including a shared visits counter and featured games.
 * 
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * 
 * @returns The HomePage component. 
 */
function HomePage({ visits, setVisits }: HomePageProps) {
  // Get a random selection of featured games
  const featuredGames = useMemo(() => {
    const allGames = getAllGames();
    return getRandomSample(allGames, 4);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to Video Game Tracker
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Discover, track, and share your favorite video games. Build your collection and connect with fellow gamers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link 
            to="/browse"
            className="px-6 py-3 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200 transition-colors"
          >
            Browse Games
          </Link>
          <Link 
            to="/registration"
            className="px-6 py-3 bg-neutral-800 text-white rounded-md font-medium hover:bg-neutral-700 transition-colors border border-neutral-700"
          >
            Create Profile
          </Link>
        </div>
      </div>

      {/* Featured Games Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Featured Games</h2>
          <Link 
            to="/browse" 
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Quick Stats / Visits Counter */}
      <section className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-white">Site Activity</h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-neutral-400">Page visits: <span className="text-white font-semibold">{visits}</span></p>
            <button
              type="button"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md font-medium hover:bg-neutral-700 transition-colors border border-neutral-700"
              onClick={() => setVisits((current) => current + 1)}
            >
              Add visit
            </button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-3">
          <div className="w-12 h-12 bg-neutral-800 rounded-lg mx-auto flex items-center justify-center">
            <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Discover</h3>
          <p className="text-neutral-400 text-sm">Search and browse through our catalog of video games</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-3">
          <div className="w-12 h-12 bg-neutral-800 rounded-lg mx-auto flex items-center justify-center">
            <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Collect</h3>
          <p className="text-neutral-400 text-sm">Add games to your favorites and build your personal collection</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-3">
          <div className="w-12 h-12 bg-neutral-800 rounded-lg mx-auto flex items-center justify-center">
            <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Track</h3>
          <p className="text-neutral-400 text-sm">Log your hardware and track game performance across systems</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
