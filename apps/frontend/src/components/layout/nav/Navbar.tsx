import { Link, useLocation } from "react-router-dom";

interface NavProps {
  isEditing?: boolean;
  onToggleEdit?: () => void;
}

/**
 * Renders the navigation bar with links and an optional edit button.
 *
 * @param isEditing - Whether the profile is in editing mode.
 * @param onToggleEdit - Function to toggle editing mode.
 * @returns The navigation bar component.
 */
function Nav({ isEditing, onToggleEdit }: NavProps) {
  const location = useLocation(); // Retrieves the current route location
  const isProfilePage = location.pathname === "/profile";

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-neutral-900 border-b border-neutral-800">
      <div className="flex gap-8">
        <Link to="/" className="text-neutral-400 hover:text-neutral-100">
          Home
        </Link>
        <Link to="/browse" className="text-neutral-400 hover:text-neutral-100">
          Browse Games
        </Link>
        <Link
          to="/hardware-logs"
          className="text-neutral-400 hover:text-neutral-100"
        >
          Hardware Logs
        </Link>
        <Link to="/profile" className="text-neutral-400 hover:text-neutral-100">
          Profile
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {isProfilePage && onToggleEdit && (
          <button
            onClick={onToggleEdit}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isEditing
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-neutral-700 text-neutral-200 hover:bg-neutral-600"
            }`}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        )}

        <Link
          to="/registration"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
