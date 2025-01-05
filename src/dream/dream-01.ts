// Copyright (c) 2024 Adam Burucs. MIT license.

// Differentiate exceptions and errors
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input: string): void {
  if (!input) {
    throw new ValidationError('Input cannot be empty.');
  }
}

try {
  validateInput('');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
