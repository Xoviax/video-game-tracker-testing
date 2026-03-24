# Architecture – M.A.Muse

This document describes the new components, hooks, services, and repositories added to support user profile management and demonstrate proper architectural separation of concerns.

## UserProfile Type & Test Data

**What does it do?**

The `UserProfile` interface defines the structure of a user account in the system, including username, email, tagline, favorite genres, and creation date. 
The test data file (`src/data/user_profiles.ts`) provides an array of 11 sample user profiles that the application uses instead of fetching from an external API.

**Why logic here / Separation of concerns:**

By defining the type and test data in a dedicated file, we separate data structure (what a user looks like) from data access (how we retrieve users). 
This makes it easy to swap test data for real database queries later without changing the rest of the application. 
Other contributors can keep their own data structures separate in their own files.

**Where is it used?**

Referenced by `userProfileRepository` to provide the dataset, and by `profileService` and `useUserProfiles` through TypeScript imports for type safety. 
The test data will be replaced with database queries in the next module.

---

## UserProfileRepository

**What does it do?**

The repository provides CRUD methods (`create`, `read`, `update`, `delete`) for user profiles. 
It's the only layer that knows about or interacts with the data source (currently test data, but could be an API, database, etc.). 
All other parts of the application must go through this repository to access user data.

**Why logic here / Separation of concerns:**

The repository abstracts away *how* data is stored or retrieved. 
If we later switch from test data to a REST API or a database, we only change the repository—components, hooks, and services don't need to know or care. 
This is the principle of *Dependency Inversion*: business logic depends on abstractions (the repository interface), not concrete implementations.

**Where is it used?**

Called by `profileService` to perform all data operations. 
Never called directly by components; the service layer sits in between to allow for business rule validation and transformation.

---

## ProfileService

**What does it do?**

The service wraps repository calls and provides a place for business logic. 
For example, you might add email validation, password hashing, audit logging, or permission checks here before persisting data. 
Currently it passes calls through to the repository, but it's ready for future business rules.

**Why logic here / Separation of concerns:**

Separates *business logic* from *data access* and *UI presentation*. 
Components don't need to know about validation rules or side effects—they just call the service. 
If business rules change, we update the service, not every component that uses profiles. 
This keeps concerns distinct: services handle "what should happen," repositories handle "where data lives."

**Where is it used?**

Called by the `useUserProfiles` hook, which calls methods like `profileService.create()`, `profileService.getAll()`, etc. 
Components never call the service directly; they use the hook to stay decoupled from service details.

---

## useUserProfiles Hook

**What does it do?**

A custom React hook that manages user profile state at the component level. 
It fetches all profiles on mount, provides a `createProfile` method to add new profiles, and handles loading state. 
When a component uses this hook, it gets reactivity and proper state management without needing to orchestrate service calls itself.

**Why logic here / Separation of concerns:**

React components should focus on rendering UI, not orchestrating data fetches or state updates. 
By extracting that logic into a hook, we keep components clean and reusable. 
The hook sits between the React component layer and the service/repository layers, translating async data operations into React state.

**Where is it used?**

Used by the `Registration` component in `src/components/pages/registration/Registration.tsx`. 
When the user submits the registration form, the component calls `createProfile()` (from the hook), 
which calls `profileService.create()`, which calls `userProfileRepository.create()`, which stores the data. 
This is the demonstration of the full architecture stack.

---

## Registration Component Integration

**What does it do?**

The Registration page is now the working example that ties all pieces together. 
When a user fills out the form and clicks "Create account," it invokes the hook, which invokes the service, which invokes the repository. 
This demonstrates that the new architecture works end-to-end.

**Why logic here / How it fits the architecture:**

The Registration component has inline comments explaining:
- That it uses the `useUserProfiles` hook for state and data operations
- That the hook calls `profileService`
- That the service calls `userProfileRepository`
- That the repository accesses test data
- Why each layer exists and what concerns it handles
This makes it clear to future contributors how the architecture is structured and where to add new logic when needed.

**Where is it used in the project:**

Located at `src/components/pages/registration/Registration.tsx`. It's part of the main application's page navigation and is the user-facing demonstration of the new architecture.


## Summary

The architecture creates a clean separation:

1. **Data Layer** (`user_profiles.ts`): Defines what user data looks like  
2. **Repository Layer** (`userProfileRepository`): Handles how to access/store user data  
3. **Service Layer** (`profileService`): Applies business rules to user operations  
4. **Hook Layer** (`useUserProfiles`): Provides React state management and reactivity  
5. **Component Layer** (`Registration`): Renders UI and delegates to the hook  

When the backend is ready, only the repository needs to change. Everything else—services, hooks, components—keeps working.
