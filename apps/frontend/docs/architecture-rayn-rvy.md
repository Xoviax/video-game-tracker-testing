# Architectural Layout: Platform & Hardware Compatibility Log

This document describes the architectural design for the "Platform & Hardware Compatibility Log" feature. The feature is built using a layered architecture pattern designed to separate presentation, business, and data access logic.

---

## 1. Data Access Logic: `PlatformHardwareRepository`

**File:** `src/repositories/PlatformHardwareRepository.ts`

### What does this repository do?
The repository handles **data access logic**. It is responsible for sending requests for data and receiving responses. In this implementation, it interacts with a mock data array (`hardwareData`) to simulate a database source. It provides two asynchronous methods:
- `getAllLogs()`: Requests all hardware compatibility logs from the data source.
- `addLog(log)`: Sends a request to persist a new log entry.

It uses `setTimeout` to simulate network latency, which imitates a real API request.

### How did you decide what logic to include, and how does it separate concerns?
I restricted this layer strictly to sending and receiving data. This layer handles how the app sends and receives requests. It does not perform validation, sorting, or business logic. 
- **Separation of Concerns:** By isolating data access here, it makes sures that the rest of the application (Services and Components) does not need to know the implementation details of the data source.

### Where is this implementation made use of and how?
- **Used in:** `src/services/PlatformHardwareService.ts`
- **How:** The service imports `HardwareRepository` and calls its methods (`getAllLogs`, `addLog`) to retrieve or update data.

---

## 2. Business Logic: `PlatformHardwareService`

**File:** `src/services/PlatformHardwareService.ts`

### What does this service do?
The service layer handles **business logic**, which defines the real-world rules of the application.
- `getLogs()`: Forwards the fetch request to the repository and applies a business rule to sort the logs by the highest FPS.
- `submitLog(logData)`: Enforces rules before data is saved, such as making sure that the `averageFps` is not negative and that the required fields are present.

### How did you decide what logic to include, and how does it separate concerns?
I decided to place validation and sorting logic here because these represent **business rules** (e.g., "logs must be sorted by performance").
- **Separation of Concerns:** This keeps the "Presentation Logic" (Components) focused on the appearance and the "Data Access Logic" (Repositories) focused on fetching. If a business rule changes (e.g., we want to sort by date instead), we modify the Service and leaving the Component and Repository untouched.

### Where is this implementation made use of and how?
- **Used in:** `src/hooks/usePlatformHardwareLogs/userPlatformHardwareLogs.ts`
- **How:** The custom hook calls `HardwareService.getLogs()` to get the processed data and `HardwareService.submitLog()` to execute the business transaction of adding a log.

---

## 3. Presentation Logic: `useHardwareLogs`

**File:** `src/hooks/usePlatformHardwareLogs/userPlatformHardwareLogs.ts`

### What does this hook do?
This custom hook manages **presentation logic** related to the state and behavior. It acts as a reusable function that components can use to interact with hardware logs.
- It initializes state for `logs`, `isLoading`, and `error`.
- It uses `useEffect` to synchronize the component with the data source.
- It exposes the `addLog` method which connects the component's user interaction to the Service layer.

### How did you decide what logic to include, and how does it separate concerns?
I included all React state management (`useState`, `useEffect`) here. Hooks are for reusable state logic.
- **Separation of Concerns:** By putting this logic into a hook, the Component (`PlatformHardwareLog.tsx`) becomes purely about how things appear (rendering HTML/CSS), while the Hook handles how the data state behaves.

### Where is this implementation made use of and how?
- **Used in:** `src/components/pages/PlatformHardwareLog/PlatformHardwareLog.tsx`
- **How:** The component calls `useHardwareLogs()` to retrieve the current state (`logs`, `isLoading`, `error`) and the `addLog` function, allowing it to display the UI based on these values.
