// Copyright (c) 2024 Adam Burucs. MIT license.

import { Either, makeLeft, makeRight } from "./lib/either.js";

async function dummyAsync(
  isSuccessful: boolean = true
): Promise<Either<string, string>> {
  if (isSuccessful) {
    return makeRight("Dummy is OK!");
  }
  return makeLeft("Dummy has Error!");
}

// Dummy is OK!
await dummyAsync().then((result: Either<string, string>) => {
  if (result.right) {
    console.log(result.right);
  } else {
    console.error(result.left);
  }
});
