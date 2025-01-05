// Copyright (c) 2024 Adam Burucs. MIT license.

// Elegant style
class CustomError extends Error {
  constructor(public code: number, message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

async function fetchData(url: string): Promise<string> {
  if (!url.startsWith('http')) {
    throw new CustomError(400, 'Invalid URL');
  }
  // Simulated async fetch
  return Promise.resolve('Data fetched successfully');
}

(async () => {
  try {
    const data = await fetchData('invalid-url');
    console.log(data);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Error ${error.code}: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
    }
  }
})();
