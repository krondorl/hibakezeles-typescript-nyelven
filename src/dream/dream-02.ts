// Copyright (c) 2024 Adam Burucs. MIT license.

// Use the same handlers for sync and async
function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error('Unknown error:', error);
  }
}

function syncFunction(): void {
  throw new Error('Synchronous error');
}

async function asyncFunction(): Promise<void> {
  throw new Error('Asynchronous error');
}

try {
  syncFunction();
} catch (error) {
  handleError(error);
}

(async () => {
  try {
    await asyncFunction();
  } catch (error) {
    handleError(error);
  }
})();
