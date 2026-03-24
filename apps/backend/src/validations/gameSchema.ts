import Joi from 'joi';

// Validation schema for game data
export const gameSchema = Joi.object({
  id: Joi.number()
    .required()
    .messages({
      'number.base': 'ID must be a number',
      'any.required': 'ID is required',
    }),
  
  name: Joi.string()
    .required()
    .trim()
    .messages({
      'string.empty': 'Game name cannot be empty',
      'any.required': 'Game name is required',
    }),
  
  url: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'URL must be a valid URI',
      'any.required': 'URL is required',
    }),
  
  synopsis: Joi.string()
    .optional()
    .trim(),
  
  avg_critic_rating: Joi.number()
    .min(0)
    .max(10)
    .optional()
    .messages({
      'number.min': 'Critic rating must be between 0 and 10',
      'number.max': 'Critic rating must be between 0 and 10',
    }),
  
  avg_user_rating: Joi.number()
    .min(0)
    .max(10)
    .optional()
    .messages({
      'number.min': 'User rating must be between 0 and 10',
      'number.max': 'User rating must be between 0 and 10',
    }),
  
  artwork_url: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Artwork URL must be a valid URI',
    }),
  
  developer: Joi.string()
    .optional()
    .trim(),
  
  publisher: Joi.string()
    .optional()
    .trim(),
  
  initial_release_date: Joi.string()
    .optional(),
  
  platforms: Joi.array()
    .items(Joi.string())
    .optional(),
  
  genre: Joi.array()
    .items(Joi.string())
    .optional(),
  
  multiplayer: Joi.boolean()
    .optional(),
  
  trailer_url: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Trailer URL must be a valid URI',
    }),
});
