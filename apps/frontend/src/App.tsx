import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home-page/HomePage";
import SearchBrowse from "./components/pages/BrowseGames/BrowseGames";
import GameDetails from "./components/pages/GameDetails/GameDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Registration from "./components/pages/registration/Registration";
import PlatformHardwareLog from "./components/pages/PlatformHardwareLog/PlatformHardwareLog";
import userAvatarFallback from "./assets/user.png";
import "./App.css";
import { useVisits } from "./hooks/useVisits/useVisits";
import { useFavorites } from "./hooks/useFavorites/useFavorites";

export interface UserProfileData {
  bio: string;
  avatarUrl: string;
}

/**
 * The main application component that sets up routing and shared state,
 * including a visits counter, favorite games list, and user profile data.
 *
 * @returns The App component.
 */
function App() {
  const { visitCount, setVisitCount } = useVisits();

  const { favorites, toggleFavorite } = useFavorites();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    bio: "This is a placeholder bio. Click edit to tell the world about your gaming habits!",
    avatarUrl: userAvatarFallback,
  });

  /**
   * Updates the user profile with the provided partial data.
   *
   * @param updatedData - Partial user profile data to update.
   */
  const handleProfileUpdate = (updatedData: Partial<UserProfileData>) => {
    setUserProfile((prev) => ({ ...prev, ...updatedData }));
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              isEditing={isEditingProfile}
              onToggleEdit={() => setIsEditingProfile(!isEditingProfile)}
            />
          }
        >
          <Route
            path="/"
            element={
              <HomePage visits={visitCount} setVisits={setVisitCount} />
            }
          />
          <Route
            path="/browse"
            element={
              <SearchBrowse
                visits={visitCount}
                setVisits={setVisitCount}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/game/:id"
            element={
              <GameDetails
                visits={visitCount}
                setVisits={setVisitCount}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <UserProfile
                visits={visitCount}
                setVisits={setVisitCount}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                user={userProfile}
                isEditing={isEditingProfile}
                onUpdateUser={handleProfileUpdate}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Registration visits={visitCount} setVisits={setVisitCount} />
            }
          />
          <Route path="/hardware-logs" element={<PlatformHardwareLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
