import { Router } from 'express';
import { createGame, getAllGames, getGameById, searchGames } from '../controllers/gameController.js';
import { gameSchema, validateRequest } from '../validations/index.js';

const router = Router();

// POST create game
router.post('/', validateRequest(gameSchema), createGame);

// GET all games
router.get('/', getAllGames);

// Search games by query
router.get('/search', searchGames);

// GET game by ID
router.get('/:id', getGameById);

export default router;
