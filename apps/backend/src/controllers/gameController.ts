import { Request, Response } from 'express';
import gameService from '../services/gameService.js';
import type { VideoGame } from '../data/videoGames.js';

export const createGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const newGame = req.body as VideoGame;
    const createdGame = await gameService.createGame(newGame);

    if (!createdGame) {
      res.status(409).json({
        status: 'error',
        message: 'A game with this ID already exists',
      });
      return;
    }

    res.status(201).json({
      status: 'success',
      data: createdGame,
      message: 'Game created successfully',
    });
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while creating game.',
    });
  }
};

export const getAllGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const games = await gameService.getAllGames();
    res.status(200).json({
      status: 'success',
      data: games,
      message: 'Games retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while fetching games.',
    });
  }
};

export const getGameById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const gameId = parseInt(id, 10);

    if (isNaN(gameId)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid game ID',
      });
      return;
    }

    const game = await gameService.getGameById(gameId);

    if (!game) {
      res.status(404).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      data: game,
      message: 'Game retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while fetching game.',
    });
  }
};

export const searchGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(400).json({
        status: 'error',
        message: 'Search query (q) is required',
      });
      return;
    }

    const games = await gameService.searchGames(q);

    res.status(200).json({
      status: 'success',
      data: games,
      message: 'Games searched successfully',
    });
  } catch (error) {
    console.error('Error searching games:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while searching games.',
    });
  }
};
