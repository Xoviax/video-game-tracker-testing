import { Link } from 'react-router-dom';
import type { VideoGame } from '../../../data/video_games';

type GameCardProps = {
    game: VideoGame;
    isFavorite?: boolean;
    onToggleFavorite?: (game: VideoGame) => void;
};

/**
 * Renders a card component for a video game, displaying its artwork, name, 
 * favorite status, and a link to view more details on IGDB.
 * 
 * @param game - The video game object to display.
 * @param isFavorite - Whether the game is marked as a favorite.
 * @param onToggleFavorite - Function to toggle the game's favorite status.
 * 
 * @returns The GameCard component.
 */
export default function GameCard({ game, isFavorite = false, onToggleFavorite }: GameCardProps) {
    return (
        <Link 
            to={`/game/${game.id}`}
            className="relative rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors aspect-3/4 group block"
        >
            {/* renders favorite button if optional param onToggleFavorite is provided */}
            {/* you can add conditionals inside Tailwind classes like this */}
            {onToggleFavorite && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onToggleFavorite(game);
                    }}
                    className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors ${
                        isFavorite 
                            ? 'bg-red-500 text-white' 
                            : 'bg-black/50 text-neutral-300 hover:bg-black/70 hover:text-white'
                    }`}
                    aria-label={isFavorite ? `Remove ${game.name} from favorites` : `Add ${game.name} to favorites`}
                >
                    {/* renders a heart icon */}
                    <svg 
                        viewBox="0 0 24 24" 
                        fill={isFavorite ? 'currentColor' : 'none'}
                        stroke="currentColor" 
                        strokeWidth={2}
                        className="w-5 h-5 pointer-events-none"
                    >
                        {/* Icon from SVGRepo.com with some minor modifications: https://www.svgrepo.com/svg/511015/heart-01*/}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            )}
            {game.artwork_url && (
                <img 
                    src={game.artwork_url} 
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent opacity-10 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md">
                <h3 className="text-base font-medium text-white truncate mb-1" title={game.name}>
                    {game.name}
                </h3>
                <span className="text-xs text-neutral-300">
                    Click for details
                </span>
            </div>
        </Link>
    );
}