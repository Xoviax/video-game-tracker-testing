import React, { useState, useMemo, useRef, useEffect } from "react";
import { useHardwareLogs } from "../../../hooks/usePlatformHardwareLogs/usePlatformHardwareLogs";
import { getAllGames } from "../../../services/gameService";
import { type VideoGame } from "../../../data/video_games";



/**
 * Component for displaying and submitting hardware compatibility logs.
 * Users can view logs from other users or submit their own performance reports.
 * Includes search functionality to filter logs by keywords.
 */
export default function PlatformHardwareLog() {
  // Destructure everything we need from our custom hook
  const { logs, isLoading, error, addLog } = useHardwareLogs();

  // Local state for the form inputs
  const [gameTitle, setGameTitle] = useState("");
  const [os, setOs] = useState("");
  const [hardwareSpecs, setHardwareSpecs] = useState("");
  const [averageFps, setAverageFps] = useState<number>(60);
  const [reviewText, setReviewText] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Search Data State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Filters the available games based on the user's input in the game title field.
   * Limits results to the top 5 matches.
   */
  const derivedGames = useMemo(() => {
    if (!gameTitle) return [];
    return getAllGames()
      .filter((g) => g.name.toLowerCase().includes(gameTitle.toLowerCase()))
      .slice(0, 5); // Limit to top 5 results
  }, [gameTitle]);

  /**
   * Handles selection of a game from the dropdown menu.
   * Populates the game title field and closes the dropdown.
   * @param {VideoGame} game - The selected game object
   */
  const handleGameSelect = (game: VideoGame) => {
    setGameTitle(game.name);
    setIsDropdownOpen(false);
    setFormError(null);
  };

  /**
   * Effect to handle clicking outside the dropdown menu to close it.
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Effect to debounce the search term input.
   * Updates `debouncedSearch` after a 2-second delay from the last input change.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchTerm]);

  /**
   * Filters the logs based on the debounced search term.
   * Splits the search term into keywords and checks if all keywords
   * exist in the log's searchable fields (title, OS, specs, review).
   */
  const filteredLogs = useMemo(() => {
    if (!debouncedSearch.trim()) return logs;

    const keywords = debouncedSearch
      .toLowerCase()
      .split(/[ ,]+/)
      .filter(Boolean);

    return logs.filter((log) => {
      const logString =
        `${log.gameTitle} ${log.os} ${log.hardwareSpecs} ${log.reviewText}`.toLowerCase();
      return keywords.every((keyword) => logString.includes(keyword));
    });
  }, [debouncedSearch, logs]);

  /**
   * Handles the submission of a new hardware log.
   * Validates the game title and calls the `addLog` function.
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!gameTitle.trim()) return;

    // Validate that the game exists in the database
    const selectedGame = getAllGames().find(
      (g) => g.name.toLowerCase() === gameTitle.trim().toLowerCase(),
    );

    if (!selectedGame) {
      setFormError("Invalid Game Title, Please pick from the dropdown");
      return;
    }

    // Pass the flat data object to the hook
    await addLog({
      gameTitle: selectedGame.name,
      os,
      hardwareSpecs,
      averageFps,
      reviewText,
      artwork_url: selectedGame.artwork_url,
    });

    // Clear the form after submission
    setGameTitle("");
    setOs("");
    setHardwareSpecs("");
    setAverageFps(60);
    setReviewText("");
  };

  /**
   * Handles changes to the game title input field.
   * Opens the dropdown and updates the state.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameTitle(e.target.value);
    setIsDropdownOpen(true);
    if (formError) setFormError(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-white text-xl">Loading hardware logs...</div>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-8">
      <header className="space-y-4">
        <h2 className="text-3xl font-bold text-white">
          Hardware & Platform Compatibility Log
        </h2>
        <p className="text-neutral-400">
          Track performance reviews and compatibility notes for different
          hardware configurations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: The Form */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 sticky top-6">
            <h3 className="text-xl font-bold text-white mb-4">Submit a Log</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Game Title Dropdown Search */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-neutral-400 mb-1">
                  Game Title
                </label>
                <input
                  type="text"
                  placeholder="Search for a game..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                  value={gameTitle}
                  onChange={handleTitleChange}
                  onFocus={() => setIsDropdownOpen(true)}
                  required
                />

                {/* Dropdown Menu */}
                {isDropdownOpen && derivedGames.length > 0 && (
                  <ul className="absolute z-10 w-full mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {derivedGames.map((game) => (
                      <li
                        key={game.id}
                        onClick={() => handleGameSelect(game)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 cursor-pointer text-white border-b border-neutral-700 last:border-0 transition-colors"
                      >
                        <img
                          src={game.artwork_url}
                          alt={game.name}
                          className="w-10 h-14 object-cover rounded bg-neutral-900"
                        />
                        <span className="font-medium">{game.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">
                  Operating System
                </label>
                <input
                  type="text"
                  placeholder="E.g. Windows 11, Ubuntu 22.04"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                  value={os}
                  onChange={(e) => setOs(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">
                  Hardware Specs
                </label>
                <input
                  type="text"
                  placeholder="E.g. RTX 4070, Ryzen 7 7800X3D"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                  value={hardwareSpecs}
                  onChange={(e) => setHardwareSpecs(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">
                  Average FPS
                </label>
                <input
                  type="number"
                  placeholder="60"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                  value={averageFps}
                  onChange={(e) => setAverageFps(Number(e.target.value))}
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">
                  Review & Notes
                </label>
                <textarea
                  placeholder="Describe performance details, setting tweaks, or issues..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors min-h-30"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-100 text-neutral-900 font-bold py-3 px-4 rounded-lg hover:bg-white active:bg-neutral-200 transition-colors"
              >
                Submit Log
              </button>
            </form>

            {/* Display Business Logic Errors */}
            {(error || formError) && (
              <div className="bg-red-900/50 border border-red-800 text-red-200 p-4 rounded-lg mt-4">
                {error || formError}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: The Logs List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-white">Recent Logs</h3>

            {/* Search Box */}
            <div className="relative flex items-center gap-2 max-w-md w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 pl-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />

              <div className="group relative">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-500 text-neutral-400 text-xs font-bold cursor-help hover:text-white hover:border-white">
                  i
                </div>
                {/* Tooltip */}
                <div className="absolute right-0 top-8 w-64 p-3 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <p>Filter logs by keywords separated by spaces or commas.</p>
                  <p className="mt-1 text-neutral-500 italic">
                    Example: "Arch Linux Nvidia" or "Windows 10, Ryzen, Radeon"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {filteredLogs.length === 0 ? (
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-10 text-center">
              <p className="text-neutral-500">
                {logs.length === 0
                  ? "No logs submitted yet. Be the first to add one!"
                  : "No logs match your search criteria."}
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors group flex gap-5"
                >
                  {/* Artwork Column */}
                  {log.artwork_url && (
                    <div className="shrink-0">
                      <img
                        src={log.artwork_url}
                        alt={log.gameTitle}
                        className="w-16 h-24 object-cover rounded bg-neutral-800 shadow-md border border-neutral-800"
                      />
                    </div>
                  )}

                  {/* Content Column */}
                  <div className="grow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {log.gameTitle}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          log.averageFps >= 60
                            ? "bg-green-900/30 text-green-400 border border-green-900"
                            : log.averageFps >= 30
                              ? "bg-yellow-900/30 text-yellow-400 border border-yellow-900"
                              : "bg-red-900/30 text-red-400 border border-red-900"
                        }`}
                      >
                        {log.averageFps} FPS
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                        <span className="text-neutral-500">OS:</span> {log.os}
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                        <span className="text-neutral-500">HW:</span>{" "}
                        {log.hardwareSpecs}
                      </div>
                    </div>

                    <div className="bg-neutral-800/50 p-3 rounded-lg border border-neutral-800 text-neutral-300 text-sm leading-relaxed">
                      {log.reviewText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
