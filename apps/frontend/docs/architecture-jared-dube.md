# Architectural Layout: User Favoriting

---

## 1. Data Access Logic: `favoriteRepository`

**File:** `src/repositories/favoriteRepository.ts`

### What does this repository do?

The `favoriteRepository` provides CRUD operations for `Favorite` records. Currently, it uses an in-memory store from test data (`src/data/favorites.ts`), but is structured to be swapped to real API calls in the future.

**Methods:**
- `getAll()` - Retrieves all favorite records
- `getById(id)` - Finds a single favorite by its ID
- `getByUserId(userId)` - Gets all favorites for a specific user
- `getByUserAndGame(userId, gameId)` - Checks if a specific user-game combination exists
- `create(favorite)` - Adds a new favorite record with auto-generated ID
- `delete(id)` - Removes a favorite by ID
- `deleteByUserAndGame(userId, gameId)` - Removes a favorite by user and game combination

### How did you decide what logic to include, and how does it separate concerns?

The repository contains **only data access logic** which means no business rules or validation. Each method mimics a database operation.

This separation means:
- The repository doesn't know why data is being accessed
- The repository doesn't know who is calling it
- When we switch from test data to a real database/API, it will be a simple matter of modifying this repository instead of multiple files.

### Where is this implementation made use of and how?

The repository is called exclusively by the service layer (`favoriteService.ts`). It is never imported directly by components or hooks. This ensures all data access flows through business logic validation first. It is used whenever a game is favorited via a GameCard component.
---

## 2. Business Logic: `favoriteService`

**File:** `src/services/favoriteService.ts`

### What does this service do?

The `favoriteService` contains all business logic for the favorites feature. It validates inputs, enforces business rules, and orchestrates repository calls. It transforms raw `Favorite` records into data (like full `VideoGame` objects) that the UI needs.

**Key methods:**
- `getUserFavoriteGames(userId)` - Returns full game objects for a user's favorites
- `isFavorite(userId, gameId)` - Checks if a game is favorited
- `addFavorite(userId, gameId)` - Adds a favorite with validation
- `removeFavorite(userId, gameId)` - Removes a favorite
- `toggleFavorite(userId, gameId)` - Adds or removes based on current state

### How did you decide what logic to include, and how does it separate concerns?

The service handles business rules and data transformation:

1. **Validation** - Ensures the game exists before favoriting:
   ```typescript
   const game = await gameRepository.getById(gameId);
   if (!game) throw new Error('Game not found.');
   ```

2. **Duplicate Prevention** - Enforces uniqueness business rule:
   ```typescript
   const existing = await favoriteRepository.getByUserAndGame(userId, gameId);
   if (existing) throw new Error('Game is already in favorites.');
   ```

3. **Data Enrichment** - Joins `Favorite` records with `VideoGame` data:
   ```typescript
   // Transforms { userId, gameId } into full VideoGame objects
   const favoriteGames = userFavorites.map(fav => allGames.find(g => g.id === fav.gameId));
   ```

The service doesn't do things like manage state or access data directly, which are jobs more suited to custom hooks and repositories respectively.

### Where is this implementation made use of and how?

The service is called by the `useFavorites` hook, which manages React state. The hook delegates all business operations to the service:

```typescript
const userFavorites = await favoriteService.getUserFavoriteGames(userId);
await favoriteService.toggleFavorite(userId, game.id);
```

---

## 3. Presentation Logic: `useFavorites`

**File:** `src/hooks/useFavorites/useFavorites.ts`

### What does this hook do?

The `useFavorites` hook manages React-specific concerns for the favorites feature such as state management, loading indicators, and error handling. It provides an interface for components to read and modify favorites without knowing about services or repositories.

**Returns:**
- `favorites` - Array of favorited `VideoGame` objects
- `toggleFavorite(game)` - Function to add/remove a favorite
- `isFavorite(gameId)` - Function to check if a game is favorited
- `isLoading` - Boolean indicating if data is being fetched
- `error` - Error message if an operation failed
- `refetch()` - Function to manually reload favorites

### How did you decide what logic to include, and how does it separate concerns?

The hook handles presentation logic:

1. **State Management** - Uses `useState` for favorites, loading, and error states
2. **Side Effects** - Uses `useEffect` to fetch data on mount
3. **Memoization** - Uses `useCallback` to prevent unnecessary re-renders
4. **Optimistic Updates** - Updates UI immediately, then syncs with backend:
   ```typescript
   // Update UI immediately
   setFavorites(prev => [...prev, game]);
   try {
     await favoriteService.toggleFavorite(userId, game.id);
   } catch {
     // Revert on error
     setFavorites(prev => prev.filter(f => f.id !== game.id));
   }
   ```

The hook doesn't handle jobs such as validation or data access, which are delegated to the service and repository respectively.

### Where is this implementation made use of and how?

The hook is used in `App.tsx` to provide favorites functionality to the entire application:

```typescript
// In App.tsx:
const { favorites, toggleFavorite } = useFavorites();

// Passed to child components:
<SearchBrowse favorites={favorites} onToggleFavorite={toggleFavorite} />
<GameDetails favorites={favorites} onToggleFavorite={toggleFavorite} />
<UserProfile favorites={favorites} onToggleFavorite={toggleFavorite} />
```

Components receive `favorites` and `toggleFavorite` as props, allowing them to display favorite status and toggle it without any knowledge of the underlying architecture.