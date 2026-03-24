import { hardwareData, type HardwareLog } from "../data/PlatformHardware";

const HardwareRepository = {
  getAllLogs: async (): Promise<HardwareLog[]> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve([...hardwareData]), 100),
    ); // 100ms simulates network delay
  },
  addLog: async (log: HardwareLog): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        hardwareData.push(log);
        resolve();
      }, 100); // 100ms simulates network delay
    });
  },
};

export default HardwareRepository;
