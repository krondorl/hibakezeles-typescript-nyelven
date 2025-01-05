// Copyright (c) 2024 Adam Burucs. MIT license.

// Statically typed exceptions
type AppError = {
  type: 'ValidationError' | 'DatabaseError' | 'UnknownError';
  message: string;
};

function throwAppError(type: AppError['type'], message: string): never {
  throw { type, message } as AppError;
}

function handleError(error: AppError): void {
  switch (error.type) {
    case 'ValidationError':
      console.error('Validation error:', error.message);
      break;
    case 'DatabaseError':
      console.error('Database error:', error.message);
      break;
    default:
      console.error('Unknown error:', error.message);
  }
}

try {
  throwAppError('ValidationError', 'Invalid input!');
} catch (error) {
  handleError(error as AppError);
}
