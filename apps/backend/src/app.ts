import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import gameRoutes from './routes/gameRoutes.js';
import platformHardwareRoutes from './routes/platformHardwareRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use('/api/games', gameRoutes);
app.use('/api/hardware-logs', platformHardwareRoutes);

// Prevents CSP errors for favicon requests
app.get('/favicon.ico', (_req, res) => res.status(204).end());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;