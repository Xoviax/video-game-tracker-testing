import { PrismaClient, HardwareLog } from '@prisma/client';

const prisma = new PrismaClient();

const hardwareService = {
  getLogs: async (): Promise<HardwareLog[]> => {
    return await prisma.hardwareLog.findMany({
      orderBy: {
        averageFps: 'desc', // Sorts by highest FPS first
      },
    });
  },

  submitLog: async (logData: Omit<HardwareLog, 'id'>): Promise<HardwareLog> => {
    if (logData.averageFps < 0) {
      throw new Error("FPS cannot be negative.");
    }
    if (logData.gameTitle.trim() === "" || logData.hardwareSpecs.trim() === "") {
      throw new Error("Game Title and Hardware Specs are required fields.");
    }

    return await prisma.hardwareLog.create({
      data: logData,
    });
  },
};

export default hardwareService;