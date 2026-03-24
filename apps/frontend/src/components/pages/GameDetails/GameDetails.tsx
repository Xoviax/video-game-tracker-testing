import type { Dispatch, SetStateAction } from 'react';
import { useParams, Link } from 'react-router-dom';
import { type VideoGame } from '../../../data/video_games';
import { getGameById, formatReleaseDate, isGameFavorite } from '../../../services/gameService';

type GameDetailsProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
  favorites?: VideoGame[];
  onToggleFavorite?: (game: VideoGame) => void;
};

/**
 * Renders the game details page for a specific video game, displaying its 
 * artwork, synopsis, ratings, platforms, genres, and favorite toggling functionality.
 * 
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * @param favorites - List of favorite video games.
 * @param onToggleFavorite - Function to toggle a game's favorite status.
 * 
 * @returns The GameDetails component.
 */
function GameDetails({ favorites = [], onToggleFavorite }: GameDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(Number(id));
  const isFavorite = game ? isGameFavorite(game.id, favorites) : false;

  if (!game) {
    return (
      <div className="space-y-6 text-center py-16">
        <h1 className="text-3xl font-bold text-white">Game Not Found</h1>
        <p className="text-neutral-400">The game you're looking for doesn't exist.</p>
        <Link 
          to="/browse" 
          className="inline-block px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {/* Hero Section */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        {/* Background blur */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={game.artwork_url} 
            alt=""
            className="w-full h-full object-cover object-center blur-md scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{game.name}</h1>
            <p className="text-neutral-300 text-lg">
              {game.developer} • Released {formatReleaseDate(game.initial_release_date)}
            </p>
          </div>

          {/* Media Row: Cover Art + Buttons | Trailer */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Left Column: Cover Art + Scores + Buttons */}
            <div className="shrink-0 flex flex-col gap-3 w-48 md:w-56">
              {/* Cover Art */}
              <div className="relative flex-1 min-h-0">
                <img 
                  src={game.artwork_url} 
                  alt={game.name}
                  className="w-full h-full rounded-lg shadow-2xl border border-neutral-700 object-cover"
                />
                {/* Favorite Button */}
                {onToggleFavorite && (
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(game)}
                    className={`absolute top-2 right-2 z-20 p-2 rounded-full transition-colors ${
                      isFavorite
                        ? 'bg-red-500 text-white'
                        : 'bg-black/50 text-neutral-300 hover:bg-black/70 hover:text-white'
                    }`}
                    aria-label={isFavorite ? `Remove ${game.name} from favorites` : `Add ${game.name} to favorites`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={isFavorite ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Ratings */}
              <div className="flex gap-2 w-full">
                <div className="flex-1 bg-neutral-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-neutral-700 text-center">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Critic</p>
                  <p className="text-xl font-bold text-white">{game.avg_critic_rating.toFixed(1)}</p>
                </div>
                <div className="flex-1 bg-neutral-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-neutral-700 text-center">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">User</p>
                  <p className="text-xl font-bold text-white">{game.avg_user_rating.toFixed(1)}</p>
                </div>
              </div>

              {/* Action Buttons - stacked */}
              <a 
                href={game.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200 transition-colors text-center text-sm"
              >
                View on IGDB
              </a>
              <Link 
                to="/browse"
                className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 text-center text-sm"
              >
                Back to Browse
              </Link>
            </div>

            {/* Right Column: Trailer */}
            {game.trailer_url && (
              <div className="flex-1 aspect-video rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={game.trailer_url}
                  title={`${game.name} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Synopsis */}
        <div className="lg:col-span-2 bg-neutral-900 rounded-lg p-6 border border-neutral-800">
          <h2 className="text-xl font-bold text-white mb-4">About</h2>
          <p className="text-neutral-300 leading-relaxed">{game.synopsis}</p>
        </div>

        {/* Game Info Sidebar */}
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-6">
          <h2 className="text-xl font-bold text-white">Game Info</h2>
          
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Developer</h3>
            <p className="text-neutral-200">{game.developer}</p>
          </div>
          
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Publisher</h3>
            <p className="text-neutral-200">{game.publisher}</p>
          </div>
          
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Release Date</h3>
            <p className="text-neutral-200">{formatReleaseDate(game.initial_release_date)}</p>
          </div>
          
          <div>
            <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Multiplayer</h3>
            <p className="text-neutral-200">{game.multiplayer ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>

      {/* Platforms & Genres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
          <h2 className="text-xl font-bold text-white mb-4">Platforms</h2>
          <div className="flex flex-wrap gap-2">
            {game.platforms.map((platform) => (
              <span 
                key={platform}
                className="px-3 py-1.5 bg-neutral-800 text-neutral-200 rounded-full text-sm border border-neutral-700"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
          <h2 className="text-xl font-bold text-white mb-4">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {game.genre.map((g) => (
              <span 
                key={g}
                className="px-3 py-1.5 bg-purple-900/50 text-purple-200 rounded-full text-sm border border-purple-800"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameDetails;
