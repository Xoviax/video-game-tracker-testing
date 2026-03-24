import { Request, Response } from 'express';
import hardwareService from '../services/platformHardwareService.js';

export const getLogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const logs = await hardwareService.getLogs();
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error fetching hardware logs:", error);
        res.status(500).json({ message: "Internal server error while fetching logs." });
    }
};

export const submitLog = async (req: Request, res: Response): Promise<void> => {
    try {
        const newLog = await hardwareService.submitLog(req.body);
        
        res.status(201).json(newLog);
    } catch (error: any) {
        res.status(400).json({ message: error.message || "Invalid hardware log data." });
    }
};