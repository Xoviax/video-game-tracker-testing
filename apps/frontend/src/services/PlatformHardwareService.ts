import { type HardwareLog } from "../data/PlatformHardware";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const HardwareService = {
  getLogs: async (): Promise<HardwareLog[]> => {
    const response = await fetch(`${API_URL}/api/hardware-logs`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch hardware logs from the server.");
    }
    
    return await response.json();
  },

  submitLog: async (logData: Omit<HardwareLog, "id">): Promise<void> => {
    const response = await fetch(`${API_URL}/api/hardware-logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit log.");
    }
  },
};

export default HardwareService;