import { useState, useEffect } from "react";
import HardwareService from "../../services/PlatformHardwareService";
import { type HardwareLog } from "../../data/PlatformHardware";

/**
 * Custom hook to manage hardware compatibility logs.
 * Provides functionality to fetch existing logs and submit new ones.
 * Handles loading states and error management.
 * 
 * @returns {Object} An object containing:
 * @returns {HardwareLog[]} logs - The current array of compatibility logs
 * @returns {boolean} isLoading - Indicates if the data is currently being fetched
 * @returns {string | null} error - Holds any error messages from fetching or adding
 * @returns {function} addLog - Function to submit a new log to the service
 */
export function useHardwareLogs() {
  const [logs, setLogs] = useState<HardwareLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches all hardware logs from the service asynchronously. 
   * Updates state with fetched data or error message.
   */
  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const data = await HardwareService.getLogs();
      setLogs(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch hardware logs.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Effect hook to fetch logs when the component mounts.
   */
  useEffect(() => {
    fetchLogs();
  }, []);

  /**
   * Submits a new hardware log to the service.
   * Refreshes the log list when a submission is successful.
   * 
   * @param {Omit<HardwareLog, "id">} newLogData - The log data to submit (excluding ID)
   */
  const addLog = async (newLogData: Omit<HardwareLog, "id">) => {
    try {
      await HardwareService.submitLog(newLogData);
      await fetchLogs(); // Refresh the list so the new log appears immediately
      setError(null);
    } catch (err: any) {
      setError(err.message); // Catches business logic errors from the service
    }
  };

  return { logs, isLoading, error, addLog };
}
