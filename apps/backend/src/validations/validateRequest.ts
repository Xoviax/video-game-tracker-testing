import { Request, Response, NextFunction } from 'express';
import { ObjectSchema, ValidationError } from 'joi';

/**
 * Middleware factory for request validation using Joi schema
 * @param schema - Joi validation schema
 * @returns Express middleware function
 */
export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const messages = error.details.map((detail) => detail.message).join(', ');
      res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        details: messages,
      });
      return;
    }

    // Replace req.body with validated and sanitized data
    req.body = value;
    next();
  };
};
