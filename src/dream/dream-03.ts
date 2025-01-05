// Copyright (c) 2024 Adam Burucs. MIT license.

// Avoid re-throw
function riskyOperation(): void {
  throw new Error('Something went wrong');
}

function safeWrapper(): void {
  try {
    riskyOperation();
  } catch (error) {
    console.error('Handled error:', (error as Error).message);
    throw error; // Re-throw explicitly
  }
}

try {
  safeWrapper();
} catch (error) {
  console.error('Final handler:', (error as Error).message);
}
